import { Link, useOutletContext } from "react-router"
import type { Song } from "../types/Song";
import styles from './SongFavorite.module.css'

type LayoutData = {
  toggleFavorito:  (song: Song) => void;
  favoritos : Song [];
};

export default function SongFavorite(){
    const {favoritos , toggleFavorito} = useOutletContext<LayoutData>();

    return(
        <div className={styles.favoritosWrapper}>
            <h1 className={styles.titulo}>Tus favoritos</h1>
            {favoritos.length === 0 ? (
                <p className={styles.vacio}>Todavía no agregaste favoritos.</p>
            ) : (
                <div className={styles.lista}>
                    {favoritos.map((fav) => (
                        <div key={fav.id} className={styles.card}>
                                <img src={fav.src} alt={fav.title} className={styles.portada} />

                                <div className={styles.info}>
                                    <Link className={styles.info_link} to={`/song/${fav.id}`}>
                                        <h2 className={styles.tituloCancion}>{fav.title}</h2>
                                    </Link>
                                    <p className={styles.autor}>{fav.autor}</p>
                                </div>
                                <p className={styles.duracion}>{fav.time}</p>

                                <img 
                                    onClick={() => toggleFavorito(fav)} 
                                    className={styles.img_favorito} 
                                    src="/icons/song/favoritoClick.png" alt="Quitar de favorito" title="Quitar de favoritos" 
                                />
                         </div>
                    ))}
                </div>
            )}
        </div>


    );

}