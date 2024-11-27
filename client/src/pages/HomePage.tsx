import Albums from "../components/Albums";
import Artist from "../components/Artists/Artist";
import News from "../components/News";
import CatalogPage from "./GenrePage";

function HomePage() {
  return (
    <>
      <div className="hero" />
      <News />
      <Artist />
      <Albums />
      <CatalogPage />
    </>
  );
}

export default HomePage;
