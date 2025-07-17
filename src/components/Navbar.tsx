import { Link } from "react-router";
import spotifyLogo from "../assets/spotify.png";
import styles from './NavbarStyle.module.css'

type SearchProps ={
  setSearchSong : (nameSong: string) => void;
};

function Navbar({setSearchSong} : SearchProps){

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={spotifyLogo} alt="Spotify" className={styles.logo} />
      </div>
      
      {/*Search*/}
      <input 
        className={styles.search_input}
        type="text"
        placeholder="Encuentra tu canción favorita"
        onChange={(e)=>setSearchSong(e.target.value.toLocaleLowerCase())}
        />
      
      <ul className={styles.navList}>
        <li><Link className={styles.link} to={'/'}>Home</Link></li>
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
