function NavBar() {
  return (
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
      <nav>{/*waiting catalogue component*/}</nav>
      <form className="search">{/* Waiting searchBar component*/}</form>
    </div>
  );
}

export default NavBar;
