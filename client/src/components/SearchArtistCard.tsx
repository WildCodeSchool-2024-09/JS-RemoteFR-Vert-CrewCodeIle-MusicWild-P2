// Show card search artist

import type { SearchArtistType } from "../types/SearchArtistType";

import { useNavigate } from "react-router-dom";

export default function searchArtistCard({
  artist,
}: { artist: SearchArtistType }) {
  const navigate = useNavigate();

  const handleOnClick = () => navigate(`/search/artist/track/${artist.id}`);
  const handleKeyUp = (event: { key: string }) => {
    if (event.key === "Enter") {
      alert("Touche Entrée pressée - Valider une action");
    }
  };

  return (
    <>
      <figure className="card">
        <img
          src={artist.picture}
          alt={artist.name}
          onClick={handleOnClick}
          onKeyUp={handleKeyUp}
        />
        <p>
          <h1>{artist.name}</h1>
        </p>
      </figure>
    </>
  );
}
