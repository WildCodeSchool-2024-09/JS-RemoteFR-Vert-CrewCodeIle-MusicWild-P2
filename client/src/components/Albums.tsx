import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    if (event.key === "Enter") {
      alert("Touche Entrée pressée - Valider une action");
    }
  };
  const VITE_API_ALBUMS = import.meta.env.VITE_API_ALBUMS;
  useEffect(() => {
    fetch(VITE_API_ALBUMS)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id: string) => navigate(`/albums/${id}`);

  const [index, setIndex] = useState<number>(0);
  const slideWidth = 200;
  const slideToShow = 4;
  const allSlides = albums.length;
  const securityMargin = allSlides + slideToShow;

  const handlePrec = () => {
    if (index > 0) {
      setIndex(index - slideToShow);
    }
  };

  const handleNext = () => {
    if (index + slideToShow < allSlides) {
      setIndex(index + slideToShow);
    }
  };

  return (
    <>
      <h2 className="albumTitle">Albums du moment</h2>
      <div className="carousel">
        <div className="carousel-container">
          <ul
            className="carousel-card"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
            }}
          >
            {albums.map((m) => (
              <li
                className="carousel-slide"
                key={m.id}
                onClick={() => handleClick(m.id)}
                onKeyUp={handleKeyUp}
              >
                <img
                  className="carousel-image"
                  src={m.cover_medium}
                  alt={`Cover de l'album ${m.title}`}
                />
                <h3 className="albumName">{m.title}</h3>
              </li>
            ))}
          </ul>
        </div>

        {albums.length > 0 && (
          <>
            <button
              type="button"
              className="carousel-btn-prec"
              onClick={handlePrec}
              disabled={index === 0}
            >
              &#10096;
            </button>
            <button
              type="button"
              className="carousel-btn-next"
              onClick={handleNext}
              disabled={index >= allSlides + securityMargin}
            >
              &#10097;
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Albums;
