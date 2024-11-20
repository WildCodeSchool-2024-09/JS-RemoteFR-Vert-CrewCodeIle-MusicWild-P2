import { useEffect, useState } from "react";
import "../components/catalog.css";

type catalogType = {
  id: string;
  name: string;
  picture: string;
};

export default function Catalog() {
  const [genre, setGenre] = useState<catalogType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/catalog")
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
            <button className="button" type="button" key={a.id}>
              {" "}
              {a.name}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
