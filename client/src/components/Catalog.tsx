import { useEffect, useState } from "react";
import "../components/catalog.css";

type catalogType = {
  id: string;
  name: string;
  picture: string;
};

const VITE_API_URL = import.meta.env.VITE_API_URL_CATALOG;

export default function Catalog() {
  const [genre, setGenre] = useState<catalogType[]>([]);

  const handleClick = (value: string) => console.log(value);

  useEffect(() => {
    fetch(VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setGenre(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container">
        <ul>
          <h1>CATALOGUE</h1>
          {genre.map((a) => (
            <button
              className="button"
              type="button"
              key={a.id}
              onClick={() => handleClick(a.name)}
            >
              {a.name}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
