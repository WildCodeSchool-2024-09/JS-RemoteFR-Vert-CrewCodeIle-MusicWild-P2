import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { artistType } from "../../types/artistType";

function Artist() {
  const VITE_API_URL_ARTIST = import.meta.env.VITE_API_URL_ARTIST;
  const [artist, setArtist] = useState<artistType[]>([]);
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  useEffect(() => {
    fetch(VITE_API_URL_ARTIST)
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id: number) => navigate(`/artist/${id}`);

  const [index, setIndex] = useState<number>(0);
  const slideWidth = 200;
  const slideToShowDesktop = 4;
  const slideToShowTablet = 3;
  const slideToShowMobile = 2;
  const allSlides = artist.length;
  const securityMargin = allSlides + 3;
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
    <article className="artists">
      <h2 className="artistTitle">Artistes</h2>
      <div className="artistList">
        <div className="carousel-container">
          <ul
            className="carousel-card-artist"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
            }}
          >
            {artist
              ? artist.map((a) => (
                  <li
                    className="carousel-slide-artist"
                    key={a.id}
                    onClick={() => handleClick(a.id)}
                    onKeyUp={handleKeyUp}
                  >
                    <img
                      className="artistPictures"
                      src={a.picture_big}
                      alt={`Nom de l'artiste : ${a.name}`}
                    />
                    <h3 className="artistName">{a.name}</h3>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        {artist.length > 0 && (
          <>
            <button
              type="button"
              className="carousel-btn-prec-artist"
              onClick={handlePrec}
              disabled={index === 0}
            >
              &#10096;
            </button>
            <button
              type="button"
              className="carousel-btn-next-artist"
              onClick={handleNext}
              disabled={index >= securityMargin}
            >
              &#10097;
            </button>
          </>
        )}
      </div>
    </article>
  );
}
export default Artist;
