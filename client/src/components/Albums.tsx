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
    event.key === "Enter";
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
  const slideToShowDesktop = 6;
  const slideToShowTablet = 4;
  const slideToShowMobile = 2;
  const allSlides = albums.length;
  const securityMargin = allSlides + slideToShowMobile;
  const screenWidth = window.innerWidth;

  const handlePrec = () => {
    if (index > 0 && screenWidth >= 992) {
      setIndex(index - slideToShowDesktop);
    } else if (index > 0 && screenWidth >= 768) {
      setIndex(index - slideToShowTablet);
    } else {
      setIndex(index - slideToShowMobile);
    }
  };

  const handleNext = () => {
    if (screenWidth >= 992 && index + slideToShowDesktop < allSlides) {
      setIndex(index + slideToShowDesktop);
    } else if (screenWidth >= 768 && index + slideToShowTablet < allSlides) {
      setIndex(index + slideToShowTablet);
    } else {
      setIndex(index + slideToShowMobile);
    }
  };

  return (
    <>
      <h2 className="albumTitle">Albums du moment</h2>
      <div className="carouselAlbum">
        <div className="carousel-container">
          <ul
            className="carousel-card-album"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
            }}
          >
            {albums.map((m) => (
              <li
                className="carousel-slide-album"
                key={m.id}
                onClick={() => handleClick(m.id)}
                onKeyUp={handleKeyUp}
              >
                <img
                  className="carousel-image-album"
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
              className="carousel-btn-prec-album"
              onClick={handlePrec}
              disabled={index === 0}
            >
              &#10096;
            </button>
            <button
              type="button"
              className="carousel-btn-next-album"
              onClick={handleNext}
              disabled={index > securityMargin}
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
