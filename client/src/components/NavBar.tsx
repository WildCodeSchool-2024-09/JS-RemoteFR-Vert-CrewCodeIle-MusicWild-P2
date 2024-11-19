import { NavLink } from "react-router-dom";
import Search from "./Search";

function NavBar() {
  return (
    <>
      <div className="navBarMW">
        <img
          className="logoMW"
          src="/images/logo-musiwild-without-text.png"
          alt="logo du site MusicWild"
        />
        <img
          className="titleMW"
          src="/images/MUSICWILD.png"
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
          </ul>
        </nav>
        <Search />
      </div>
    </>
  );
}

export default NavBar;
