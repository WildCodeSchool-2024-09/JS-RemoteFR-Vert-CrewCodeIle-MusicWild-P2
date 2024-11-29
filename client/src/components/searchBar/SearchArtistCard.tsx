// Show card search artist

import { useNavigate } from "react-router-dom";
import type { SearchArtistType } from "../../types/SearchArtistType";

export default function searchArtistCard({
  artist,
}: { artist: SearchArtistType }) {
  const navigate = useNavigate();

  const handleOnClick = () => navigate(`/search/artist/track/${artist.id}`);
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
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
