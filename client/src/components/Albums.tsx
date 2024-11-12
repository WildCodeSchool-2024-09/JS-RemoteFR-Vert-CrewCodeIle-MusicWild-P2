import { useEffect, useState } from "react";
import type { albumType } from "../types/albumType";
import AlbumsDetails from "./AlbumsDetails";

function Albums() {
  const [album, setAlbum] = useState<albumType>();

  useEffect(() => {
    fetch("http://localhost:3310/")
      .then((response) => response.json())
      .then((data) => setAlbum(data));
  }, []);
  return (
    <article className="albums">
      <h2>Albums du moment</h2>
      {album && <AlbumsDetails albumChoose={album} />}
    </article>
  );
}

export default Albums;
