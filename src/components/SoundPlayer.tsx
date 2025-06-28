import { useRef, useState } from "react";
import styles from './SoundPlayerStyles.module.css';

import data from '../data/songsGrups';

type SongCardProps ={
    title : string ,
    autor : string,
    time : string,
    src : string,
};

function SoundPlayer(props : SongCardProps){
    const {title = '-' , autor = '-' , time = '0:0' , src = './icons/audio/defaul.png'} = props;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    function togglePlay(){
        console.log('0');
        setIsPlaying(!isPlaying);
    }

    return(
            
        <div className={styles.player}>

            <div className={styles.left}>
                <img src= "./assets/antihero.jpeg" alt="Portada" className={styles.cover} />
                <div className={styles.info}>
                <h3>{title}</h3>
                <p>{autor}</p>
                </div>
            </div>

        {/* Centro */}
            <div className={styles.center}>
                <div className={styles.controls}>
                    <img src="./icons/audio/previous.png" alt="Previous" />
                    <img onClick={togglePlay} src={isPlaying ? './icons/audio/play.png' : './icons/audio/pause.png'} alt="Play/Pause" />    
                    <img src="./icons/audio/next.png" alt="Next" />
                </div>

                <div className={styles.progress}>
                
                <span>{time} </span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={20}
                    
                />
                <span>{ time}</span>
                </div>
            </div>

        <audio ref={audioRef} src="./sound/Ordinary.mp3" />
        </div>
    );
    /*
    function handlerPlay(){
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.pause();
            }else{
                audioRef.current.play();
            }
        }

        setIsPlaying(!isPlaying);
    }

    return(
        <div>
            <img src={!isPlaying ? './icons/audio/play.png' : '/icons/audio/pause.png'} onClick={handlerPlay} alt="" />
            <audio ref={audioRef} autoPlay={true} controls src="./sound/Ordinary.mp3"></audio>
        </div>
    );
    */
/*
<video ref={videoRef} onTimeUpdate={handleTimeUpdate} width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>*/

}
export default SoundPlayer;

