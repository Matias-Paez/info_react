import styles from './SongCardStyle.module.css'
import type { Song } from '../types/Song';
import { Link } from 'react-router';

type SongCardProps ={
    song: Song;
    setSelectedSong: (song:Song) => void;
};

function SongCard({song, setSelectedSong}:SongCardProps){
    const {title, autor, time, src, id}= song;

    return(    
        <article className={styles.card} >
           <Link className={styles.card_link} to={`/song/${id}`}>
            <div >
                <img className={styles.image} src={src} alt={title} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.author}>{autor}</p>
                <p className={styles.time}>{time} min</p>
            </div>
            </Link>
            <img
            onClick={() => setSelectedSong(song)} 
            src={"./icons/song/playing.png"} alt="imagen al pasar el mause" className={styles.card_hover_image} />
        </article>
    );
}

export default SongCard