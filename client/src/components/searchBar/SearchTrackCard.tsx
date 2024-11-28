// Show card search track

import "./cards.css";
import type { SearchTrackType } from "../../types/SearchTrackType";

export default function searchTrackCard({ track }: { track: SearchTrackType }) {
  return (
    <>
      <article className="track-card">
        <img src={track.artist.picture_small} alt={track.artist.name} />
        <h3>{track.artist.name}</h3>
        <h3>{track.title}</h3>
        <span>
          <audio controls src={track.preview}>
            <track kind="captions" />
            Play
          </audio>
        </span>
      </article>
    </>
  );
}
