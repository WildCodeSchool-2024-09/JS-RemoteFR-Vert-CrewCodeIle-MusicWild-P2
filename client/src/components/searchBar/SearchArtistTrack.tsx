import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { SearchArtistTrackType } from "../../types/SearchArtistTrackType";

export default function SearchArtistTrack() {
  const [track, setTrack] = useState<SearchArtistTrackType[]>([]);
  const navigate = useNavigate();

  //return to previous page
  const handeClickReturn = () => {
    window.history.go(-1);
  };

  const { id } = useParams();
  const URL_API_SEARCH_ARTIST_TRACK = import.meta.env
    .VITE_API_SEARCH_ARTIST_TRACK;

  useEffect(() => {
    fetch(`${URL_API_SEARCH_ARTIST_TRACK}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `${id}`,
      }),
    })
      .then((Response) => Response.json())
      .then((data) => setTrack(data.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <section className="trackList">
        <h1>Extraits musicaux</h1>
        <button type="submit" className="returnList" onClick={handeClickReturn}>
          {"< "}Retour
        </button>
        <figure className="introduction">
          {track[0] != null && (
            <img src={track[0].album.cover_medium} alt={track[0].artist.name} />
          )}
          <div className="detailsArtist">
            <span>{track[0] != null && <h2>{track[0].artist.name}</h2>}</span>
            <button
              type="submit"
              className="buttonAlbums"
              onClick={() => {
                navigate(`/search/album/artist/${track[0].artist.id}`);
              }}
            >
              Albums
            </button>
          </div>
        </figure>
        {track?.map((track: SearchArtistTrackType) => (
          <article key={track.id} className="track">
            <img src={track.contributors[0].picture_small} alt="" />
            <h2>{track.title}</h2>
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
