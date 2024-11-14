import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navBarMW">
        <img
          className="logoMW"
          src="../../public/Images/logo-musiwild-without-text.png"
          alt="logo du site MusicWild"
        />
        <img
          className="titleMW"
          src="../../public/Images/MUSICWILD.png"
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
          </ul>
        </nav>
        <form className="search">
          <input className="searchBar" type="text" />
          <img
            className="loupe"
            src="../public/Images/loupe.png"
            alt="représentation d'une loupe"
          />
        </form>
      </div>
    </>
  );
}

export default NavBar;
