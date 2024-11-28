import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="hero" />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
