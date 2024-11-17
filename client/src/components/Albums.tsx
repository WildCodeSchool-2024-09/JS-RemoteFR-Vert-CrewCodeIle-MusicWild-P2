import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type albumType = {
  id: string;
  name: string;
  picture: string;
  genre: string;
  preview: string;
  picture_medium: string;
  cover_medium: string;
  title: string;
};

function Albums() {
  const [albums, setAlbums] = useState<albumType[]>([]);
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    if (event.key === "Enter") {
      alert("Touche Entrée pressée - Valider une action");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3310/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id: string) => navigate(`/albums/${id}`);

  return (
    <article className="albums">
      <h2 className="albumTitle">Albums du moment</h2>
      <div className="albumList">
        {albums.map((m) => (
          <div
            className="cover"
            key={m.id}
            onClick={() => handleClick(m.id)}
            onKeyUp={handleKeyUp}
          >
            <img src={m.cover_medium} alt={`Cover de l'album ${m.title}`} />
            <h3>{m.title}</h3>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Albums;
