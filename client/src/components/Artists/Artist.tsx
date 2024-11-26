import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { artistType } from "../../types/artistType";

function Artist() {
  const VITE_API_URL_ARTIST = import.meta.env.VITE_API_URL_ARTIST;
  const [artist, setArtist] = useState<artistType[]>([]);
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    if (event.key === "Enter") {
      alert("Touche Entrée pressée - Valider une action");
    }
  };

  useEffect(() => {
    fetch(VITE_API_URL_ARTIST)
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id: number) => navigate(`/artist/${id}`);

  return (
    <article className="artists">
      <h2 className="artistTitle">Artistes</h2>
      <div className="artistList">
        {artist
          ? artist.map((a) => (
              <div
                key={a.id}
                onClick={() => handleClick(a.id)}
                onKeyUp={handleKeyUp}
              >
                <img
                  className="artistPictures"
                  src={a.picture}
                  alt={`Nom de l'artiste : ${a.name}`}
                />
                <h3>{a.name}</h3>
              </div>
            ))
          : ""}
      </div>
    </article>
  );
}
export default Artist;
