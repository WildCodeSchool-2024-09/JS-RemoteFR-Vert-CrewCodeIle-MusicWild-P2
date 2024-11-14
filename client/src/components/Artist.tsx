import { useEffect, useState } from "react";

type artistType = {
  id: string;
  name: string;
  picture: string;
  genre: string;
  preview: string;
};

function Artist() {
  const [artist, setArtist] = useState<artistType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/")
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className="artists">
      <h2 className="artistTitle">Artiste du moment</h2>
      <div className="artistList">
        {artist
          ? artist.map((a) => (
              <div key={a.id}>
                <img
                  className="artistPictures"
                  src={a.picture}
                  alt={`Nom de l'artiste : ${a.name}`}
                />
                <h3>{a.name}</h3>
              </div>
            ))
          : ""}
      </div>
    </article>
  );
}
export default Artist;
