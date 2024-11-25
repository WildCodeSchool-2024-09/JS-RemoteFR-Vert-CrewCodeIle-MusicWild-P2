import { useEffect, useState } from "react";
import "../components/catalog.css";

type catalogType = {
  id: string;
  name: string;
  picture: string;
};

const VITE_API_URL_CATALOG = import.meta.env.VITE_API_URL_CATALOG;

export default function Catalog1() {
  const [genre, setGenre] = useState<catalogType[]>([]);

  useEffect(() => {
    fetch(VITE_API_URL_CATALOG)
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
            <div key={a.id}>
              <img src={a.picture} alt={a.name} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
