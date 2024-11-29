// show tracks of album

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SearchAlbumTrackType } from "../../types/SearchAlbumTrackType";

export default function SearchArtistTrack() {
  const [trackList, setTrackList] = useState<SearchAlbumTrackType[]>([]);
  const { id } = useParams();
  const URL_API_SEARCH_ALBUM_TRACK = import.meta.env
    .VITE_API_SEARCH_ALBUM_TRACK;

  //return to previous page
  const handeClickReturn = () => {
    window.history.go(-1);
  };

  useEffect(() => {
    fetch(`${URL_API_SEARCH_ALBUM_TRACK}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `${id}`,
      }),
    })
      .then((Response) => Response.json())
      .then((data) => setTrackList(data.data))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <>
      <section className="trackList">
        <h1>Extraits de l'album</h1>

        <figure className="introduction">
          <div className="detailsAlbum">
            <button
              type="submit"
              className="returnList"
              onClick={handeClickReturn}
            >
              {"< "}Retour
            </button>

            <span>{trackList[0] && <h3>Album : {trackList[0].title}</h3>}</span>
            <span>
              {trackList[0] && <h3>Artist : {trackList[0].artist.name}</h3>}
            </span>
          </div>
        </figure>
        {trackList?.map((track: SearchAlbumTrackType) => (
          <article key={track.id} className="track">
            <h3>{track.title}</h3>
            <span>
              <audio controls src={track.preview}>
                <track kind="captions" />
                Play
              </audio>
            </span>
          </article>
        ))}
      </section>
    </>
  );
}
