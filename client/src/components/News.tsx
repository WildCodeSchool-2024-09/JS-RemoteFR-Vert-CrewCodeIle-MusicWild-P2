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
  cover: string;
};
function News() {
  const [news, setNews] = useState<albumType[]>([]);
  const navigate = useNavigate();
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };
  const VITE_API_NEWS = import.meta.env.VITE_API_NEWS;
  useEffect(() => {
    fetch(VITE_API_NEWS)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error(error));
  }, []);
  const handleClick = (id: string) => navigate(`/albums/${id}`);
  const [index, setIndex] = useState<number>(0);
  const slideWidth = 200;
  const slideToShowDesktop = 4;
  const slideToShowTablet = 3;
  const slideToShowMobile = 2;
  const allSlides = news.length;
  const securityMargin = allSlides - slideToShowMobile;
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
      <h2 className="newsTitle">Nouveautés</h2>
      <div className="carouselNews">
        <div className="carousel-container-news">
          <ul
            className="carousel-card-news"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
            }}
          >
            {news.map((n) => (
              <li
                className="carousel-slide-news"
                key={n.id}
                onClick={() => handleClick(n.id)}
                onKeyUp={handleKeyUp}
              >
                <img
                  className="carousel-image-news"
                  src={n.cover_medium}
                  alt={n.name}
                />
                <h3 className="newsName">{n.title}</h3>
              </li>
            ))}
          </ul>
        </div>
        {news.length > 0 && (
          <>
            <button
              type="button"
              className="carousel-btn-prec-news"
              onClick={handlePrec}
              disabled={index === 0}
            >
              &#10096;
            </button>
            <button
              type="button"
              className="carousel-btn-next-news"
              onClick={handleNext}
              disabled={index >= securityMargin}
            >
              &#10097;
            </button>
          </>
        )}
      </div>
    </>
  );
}
export default News;
