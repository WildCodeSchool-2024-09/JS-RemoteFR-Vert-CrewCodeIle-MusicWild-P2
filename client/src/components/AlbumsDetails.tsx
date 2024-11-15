import { useState } from "react";
import { useEffect } from "react";

type albumType = {
  id: string;
  name: string;
  picture: string;
  genre: string;
  preview: string;
  picture_medium: string;
  cover_medium: string;
  title: string;
  musicTitle: string;
};

function AlbumsDetails() {
  const [review, setPreview] = useState<albumType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/")
      .then((response) => response.json())
      .then((data) => setPreview(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article>
      <h2>Details de l'album</h2>
      {review.map((p) => (
        <div key={p.id}>
          <audio controls src={p.preview}>
            <track kind="captions" />
            Play
          </audio>
          <h3>{p.musicTitle}</h3>
        </div>
      ))}
    </article>
  );
}

export default AlbumsDetails;
