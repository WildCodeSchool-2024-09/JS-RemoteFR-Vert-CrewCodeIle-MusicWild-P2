// Show card search album/artist

import "./cards.css";
import "./search.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { SearchAlbumArtistType } from "../../types/SearchAlbumArtistType";

export default function searchAbumArtistCard() {
  const [albumArtist, setAlbumArtist] = useState<SearchAlbumArtistType[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const URL_API_SEARCH_ALBUM_ARTIST = import.meta.env
    .VITE_API_SEARCH_ALBUM_ARTIST;

  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  useEffect(() => {
    fetch(`${URL_API_SEARCH_ALBUM_ARTIST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `${id}`,
      }),
    })
      .then((Response) => Response.json())
      .then((data) => setAlbumArtist(data.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <section className="cards">
        {albumArtist?.map((a: SearchAlbumArtistType) => (
          <figure key={a.id} className="cards-AlbumArtist">
            <img
              src={a.album.cover_medium}
              alt={a.artist.name}
              onClick={() => {
                navigate(`/search/album/tracks/${a.album.id}`);
              }}
              onKeyUp={handleKeyUp}
            />
            <h2>
              <b>Artiste</b> : {a.artist.name}
            </h2>
            <h3>
              <b>Album</b> : {a.album.title}
            </h3>
            <h3>
              <b>Titre</b> : {a.title_short}
            </h3>
          </figure>
        ))}
      </section>
    </>
  );
}
