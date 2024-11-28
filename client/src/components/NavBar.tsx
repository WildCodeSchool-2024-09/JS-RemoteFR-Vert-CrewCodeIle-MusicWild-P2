import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Search from "./searchBar/Search";

function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  return (
    <>
      <div className="navBarMW">
        <img
          className="logoMW"
          src="/Images/logo-musiwild-without-text.png"
          alt="logo du site MusicWild"
          onClick={handleClick}
          onKeyUp={handleKeyUp}
        />
        <img
          className="titleMW"
          src="/Images/MUSICWILD.png"
          alt="Titre du site MusicWild"
        />
      </div>

      <div className="listAndSearch">
        <nav>
          <ul className="navBarLink">
            <li>
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={"/albums"}>Albums</NavLink>
            </li>
            <li>
              <NavLink to={"/artist"}>Artistes</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>Nouveautés</NavLink>
            </li>
            <li>
              <NavLink to={"/catalog"}>Catalogue</NavLink>
            </li>
          </ul>
          <div>
            <Search />
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
