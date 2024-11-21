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
  track_position: number;
  duration: number;
};

function AlbumsDetails() {
  const [review, setPreview] = useState<albumType[]>([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/albums/${id}`)
      .then((response) => response.json())
      .then((data) => setPreview(data.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <article>
      <h2 className="albumDetails">Détails de l'album</h2>
      <table className="albumPlay">
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Durée</th>
            <th>Play</th>
          </tr>
        </thead>
        <tbody>
          {review.map((p) => (
            <tr key={p.id}>
              <td>{p.track_position}</td>
              <td>{p.title}</td>
              <td>{p.duration} sec</td>
              <td>
                <audio controls src={p.preview}>
                  <track kind="captions" />
                  Play
                </audio>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default AlbumsDetails;
