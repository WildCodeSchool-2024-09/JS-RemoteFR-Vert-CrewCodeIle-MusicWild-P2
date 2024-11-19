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
    if (event.key === "Enter") {
      alert("Touche Entrée pressée - Valider une action");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3310/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error(error));
  }, []);
  const handleClick = (id: string) => navigate(`/albums/${id}`);

  return (
    <article className="news">
      <h2>Nouveautés</h2>
      {news.map((n) => (
        <div key={n.id} onClick={() => handleClick(n.id)} onKeyUp={handleKeyUp}>
          <img src={n.cover} alt={n.name} />
          <h3>{n.name}</h3>
        </div>
      ))}
    </article>
  );
}
export default News;
