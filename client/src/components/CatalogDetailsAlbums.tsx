import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

type albumType = {
  id: string;
  description: string;
  name: string;
  picture: string;
  genre: string;
  preview: string;
  picture_medium: string;
  cover_medium: string;
  title: string;
};

function CatalogDetailsAlbums() {
  const [albums, setAlbums] = useState<albumType[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };
  const VITE_API_CATALOG_ALBUMS_ID = import.meta.env.VITE_API_CATALOG_ALBUMS_ID;

  useEffect(() => {
    fetch(`${VITE_API_CATALOG_ALBUMS_ID}${id}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleClick = (id: string) => navigate(`/albums/${id}`);
  return (
    <div>
      <h2 className="catalogDetailsAlbumsTitle"> Selection d'albums</h2>
      <article className="catalogDetailsAlbumsSection">
        {albums.map((a) => (
          <div
            key={a.id}
            onClick={() => handleClick(a.id)}
            onKeyUp={handleKeyUp}
          >
            <img
              src={a.cover_medium}
              alt={`Présentation de l'album ${a.title}`}
            />
            <h2>{a.title}</h2>
          </div>
        ))}
      </article>
    </div>
  );
}

export default CatalogDetailsAlbums;
