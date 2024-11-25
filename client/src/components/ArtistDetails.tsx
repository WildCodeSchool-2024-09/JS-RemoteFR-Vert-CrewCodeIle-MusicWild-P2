import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { artistType } from "../types/artistType";

function ArtistsDetails() {
  const VITE_API_URL_ARTIST_DETAILS = import.meta.env
    .VITE_API_URL_ARTIST_DETAILS;
  const [artist, setArtist] = useState<artistType[]>([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${VITE_API_URL_ARTIST_DETAILS}${id}`)
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <article>
      {artist.map((a) => (
        <div key={a.id}>
          <img src={a.picture} alt={`Présentation de l'artiste ${a.name}`} />
          <h2>{a.name}</h2>
          <p>{a.description}</p>
        </div>
      ))}
    </article>
  );
}

export default ArtistsDetails;
