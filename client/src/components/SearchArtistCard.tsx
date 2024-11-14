// Show card search artist

import type { SearchArtistType } from "../types/SearchArtistType";

export default function searchArtistCard({
  artist,
}: { artist: SearchArtistType }) {
  return (
    <>
      <img src={artist.picture} alt={artist.name} />
      <h1>{artist.name}</h1>
      <h2>TrackList : {artist.tracklist}</h2>
    </>
  );
}
