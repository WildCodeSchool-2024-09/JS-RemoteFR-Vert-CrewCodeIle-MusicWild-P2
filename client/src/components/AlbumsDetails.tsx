import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/albums/${id}`)
      .then((response) => response.json())
      .then((data) => setPreview(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <article>
      <h2>Details de l'album</h2>
      {review.map((p) => (
        <div key={p.id}>
          <audio controls src={p.preview}>
            <track kind="captions" />
            Play
          </audio>
          <h3>{p.title}</h3>
        </div>
      ))}
    </article>
  );
}

export default AlbumsDetails;
