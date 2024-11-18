import { useEffect, useState } from "react";

type albumType = {
  id: string;
  name: string;
  picture: string;
  genre: string;
  preview: string;
  picture_medium: string;
  cover_medium: string;
  title: string;
};

function Albums() {
  const [albums, setAlbums] = useState<albumType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className="albums">
      <h2 className="albumTitle">Albums du moment</h2>
      <div className="albumList">
        {albums.map((m) => (
          <div key={m.id}>
            <img src={m.cover_medium} alt={`Cover de l'album ${m.title}`} />
            <h3>{m.title}</h3>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Albums;
