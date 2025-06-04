import spotifyLogo from "../assets/spotify.png";
import styles from './NavbarStyle.module.css'


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={spotifyLogo} alt="Spotify" className={styles.logo} />
      </div>

      <ul className={styles.navList}>
        <li><a className={styles.link} href="#">Home</a></li>
        <li><a className={styles.link} href="#">Planes</a></li>
        <li><a className={styles.link} href="#">Descargar App</a></li>
        <li><a className={styles.link} href="#">Registrarse</a></li>
      </ul>

      <div className={styles.right}>
        <button className={styles.loginButton}>Iniciar sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;
