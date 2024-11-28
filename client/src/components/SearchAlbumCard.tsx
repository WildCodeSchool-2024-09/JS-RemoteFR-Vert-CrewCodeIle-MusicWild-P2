// Show card search album

import "./cards.css";
import { useNavigate } from "react-router-dom";
import type { SearchAlbumType } from "../types/SearchAlbumType";
export default function searchAbumCard({ album }: { album: SearchAlbumType }) {
  const navigate = useNavigate();

  const handleOnClick = () =>
    navigate(`/search/album/tracks/${album.album.id}`);
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  return (
    <>
      <figure className="cardAlbum">
        <img
          src={album.album.cover_medium}
          alt={album.artist.name}
          onClick={handleOnClick}
          onKeyUp={handleKeyUp}
        />
        <h2>
          <b>Artiste</b> : {album.artist.name}
        </h2>
        <h3>
          <b>Album</b> : {album.album.title}
        </h3>
        <h3>
          <b>Titre</b> : {album.title_short}
        </h3>
      </figure>
    </>
  );
}
