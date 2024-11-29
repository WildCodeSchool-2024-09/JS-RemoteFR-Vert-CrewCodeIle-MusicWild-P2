import { NavLink } from "react-router-dom";
import styles from "../components/ErrorPage.module.css";

function ErrorPage() {
  return (
    <>
      <h1 className={styles.errorTitle}>Error404</h1>
      <div className={styles.gif}>
        <img src="/Images/giphy.gif" alt="GIF amusant" />
      </div>
      <p className={styles.textError}>
        La page que vous recherchez n'existe pas ou est indisponible.
      </p>
      <button className={styles.buttonError} type="button">
        <NavLink to={"/"}>Revenir sur MusicWild</NavLink>
      </button>
    </>
  );
}

export default ErrorPage;
