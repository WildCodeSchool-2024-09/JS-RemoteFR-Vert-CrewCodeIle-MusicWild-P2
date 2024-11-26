import Albums from "../components/Albums";
import Artist from "../components/Artists/Artist";
import News from "../components/News";
function HomePage() {
  return (
    <>
      <News />
      <Artist />
      <Albums />
    </>
  );
}

export default HomePage;
