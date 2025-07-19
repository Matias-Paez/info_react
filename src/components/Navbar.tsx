import { Link } from "react-router";
import spotifyLogo from "../assets/spotify.png";
import styles from './NavbarStyle.module.css'

type SearchProps ={
  searchSong: string
  setSearchSong : (nameSong: string) => void;
};

function Navbar({searchSong , setSearchSong} : SearchProps){

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={spotifyLogo} alt="Spotify" className={styles.logo} />
      </div>
      
      {/*Search*/}
      <input 
        className={styles.search_input}
        type="text"
        value={searchSong}
        placeholder="Encuentra tu canción favorita"
        onChange={(e)=>setSearchSong(e.target.value.toLocaleLowerCase())}
        
        />
      
      <ul className={styles.navList}>
        <li> <Link className={styles.link} to={'/'}>Home</Link></li>
        <li> <Link className={styles.link} to={'/favorites'} >Favoritos</Link> </li>
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
