import spotifyLogo from "../assets/spotify.png";
import styles from './NavbarStyle.module.css'


function Navbar({onSearchChange} : {onSearchChange : (nameSong: string) => void}){

  function handleChange( e: React.ChangeEvent<HTMLInputElement>){
    onSearchChange(e.target.value.toLowerCase());
  }

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
        onChange={handleChange}
        />
      
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
