import { useState , useEffect } from 'react';
import styles from'./SongDetail.module.css';
import type { Song } from '../types/Song';
import { useOutletContext, useParams } from 'react-router';

import { musicService } from '../data/mock/service';

type LayoutData = {
  setSelectedSong: (song: Song) => void;
  toggleFavorito : (id : string) => void;
};

export default function SongDetail(){
    const { setSelectedSong , toggleFavorito } = useOutletContext<LayoutData>();
    const [favorite , setFavorite] = useState<boolean | null>(null); 
    const {id} = useParams();
    const [song, setSong] = useState<Song| null>();
    const [loading , setLoading] = useState(false);

    const loadSong = async () =>{
        try{
            setLoading(true);
            const data = await musicService.getSongById(id);
            setFavorite(data.favorite);
            setSong(data);
        }catch(error){
            setLoading(false);
            console.error('error ',error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        loadSong();
    }, []);

    if (loading){
        return <p>Cargando Canción</p>
    }
    if (!song){
        return(
            <div className={styles.song_wrapper}>Canción no encontrada.</div>
        );
    }

    const { title , autor , time , src} = song;  //array destructuring
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
                onClick={() => {
                    toggleFavorito(song.id);
                    setFavorite(prev => !prev);
                    }
                }
                alt="Favorito" className={styles.play_btn} />
            </div>

            <div className={styles.artist_box}>
                <p className= {styles.artist_box_p}>Artistas</p>
                <div className= {styles.artist_box_div}>
                    <img src="/icons/song/userdefault.png" alt="img_autor" className={styles.artist_img} />
                    <p>{autor}</p>
                </div>
            </div>
        </div>
    )
}