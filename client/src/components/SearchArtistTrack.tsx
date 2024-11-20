import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SearchArtistTrackType } from "../types/SearchArtistTrackType";

export default function SearchArtistTrack() {
  const [track, setTrack] = useState<SearchArtistTrackType[]>([]);

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
        {track?.map((track: SearchArtistTrackType) => (
          <article key={track.id} className="track">
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
