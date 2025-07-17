import styles from './SongCardStyle.module.css'
import type { Song } from '../types/Song';

type SongCardProps ={
    song: Song;
    setSelectedSong: (song:Song) => void;
};

function SongCard({song, setSelectedSong}:SongCardProps){
    const {title, autor, time, src }= song;

    return(
        <article className={styles.card} >
            <img className={styles.image} src={src} alt={title} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.author}>{autor}</p>
            <p className={styles.time}>{time} min</p>
            <img
            onClick={() => setSelectedSong(song)} 
            src={"./icons/song/playing.png"} alt="imagen al pasar el mause" className={styles.card_hover_image} />
        </article>
    );
}

export default SongCard