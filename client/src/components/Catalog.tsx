import { useEffect, useState } from "react";
import "../components/catalog.css";
import { useNavigate } from "react-router-dom";

type catalogType = {
  id: string;
  name: string;
  picture: string;
};

export default function Catalog() {
  const [genre, setGenre] = useState<catalogType[]>([]);
  const VITE_API_URL_CATALOG = import.meta.env.VITE_API_URL_CATALOG;
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  useEffect(() => {
    fetch(VITE_API_URL_CATALOG)
      .then((response) => response.json())
      .then((data) => setGenre(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id: string) => navigate(`/catalog/artist/${id}`);

  return (
    <>
      <div className="catalogContainer">
        <h2 className="catalogTitle">Catalogue</h2>
        <div className="catalogSection">
          {genre.map((a) => (
            <div
              key={a.id}
              onClick={() => handleClick(a.id)}
              onKeyUp={handleKeyUp}
            >
              <img className="catalogImage" src={a.picture} alt={a.name} />
              <p>{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
