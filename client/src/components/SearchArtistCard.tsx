// Show card search artist

import type { SearchArtistType } from "../types/SearchArtistType";

export default function searchArtistCard({
  artist,
}: { artist: SearchArtistType }) {
  return (
    <>
      <figure className="card">
        <img src={artist.picture} alt={artist.name} />
        <p>
          <h1>{artist.name}</h1>
        </p>
      </figure>
    </>
  );
}
