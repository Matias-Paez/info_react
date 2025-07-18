import { useState } from 'react'
import styles from'./SongDetail.module.css'
import type { Song } from '../types/Song';
import type { SongGroup } from '../types/SongGroup';
import { useOutletContext, useParams } from 'react-router';

type LayoutData = {
  songGroups: SongGroup[];
  setSelectedSong: (song: Song) => void;
};

export default function SongDetail(){
    const { songGroups, setSelectedSong } = useOutletContext<LayoutData>();
    const [favorite , setFavorite] = useState(false);
    const {id} = useParams();
    
    const song : Song | undefined = songGroups
    .flatMap( group =>group.songs) //uno todas las canciones
    .find(song => song.id.toString()==id);//devuelvo la coincidencia
    
    if (!song){
        return(
            <div className={styles.song_wrapper}>Canción no encontrada.</div>
        );
        
    }

    const {title , autor , time , src} = song;  //array destructuring
    return (
        <div className={styles.song_wrapper}>
            
            <div className={styles.song_container} >
                <img
                    src={src}
                    alt="Portada del álbum"
                    className={styles.album_cover}
                />
                <div className= {styles.song_info}>
                    <p className={styles.song_info_p}>Canción</p>
                    <h1>{title}</h1>
                    <div className={styles.song_info_content}>
                        <p className= {styles.artist}>{autor}</p> 
                        <p className={styles.year} >2018 </p>
                        <p className= {styles.duration}> {time}</p>
                        <p className= {styles.streams}> 592,217,517</p>
                    </div>

                </div>  
            </div>
            
            <div className={styles.actions}>
                <img
                onClick={() => setSelectedSong(song)} 
                src="/icons/song/playing.png" alt="Reproducir" className={styles.play_btn} />
                
                <img src= {favorite? '/icons/song/favoritoClick.png':'/icons/song/favorito.png'}
                onClick={()=> setFavorite(!favorite)}
                alt="Favorito" className={styles.play_btn} />
            </div>

            <div className={styles.artist_box}>
                <p className= {styles.artist_box_p}>Artistas</p>
                <div className= {styles.artist_box_div}>
                    <img src="/assets/dance.jpeg" alt="Duki" className={styles.artist_img} />
                    <p>{autor}</p>
                </div>
            </div>
        </div>
    )
}