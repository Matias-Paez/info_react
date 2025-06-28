import { useRef, useState, useEffect } from "react";
import styles from './SoundPlayerStyles.module.css';

function SoundPlayer({song}){
    const {title , autor , time , src} = song;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    useEffect(() => {
        const audio = audioRef.current;
        
        function handleTimeUpdate() {
            setCurrentTime(audio.currentTime);
        }

        function handleLoadedMetadata() {
            setDuration(audio.duration);
        }

        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, []);
    
    function togglePlay(){
        if(!isPlaying){
            audioRef.current?.play();
        }else{
            audioRef.current?.pause();
        }
        setIsPlaying(!isPlaying);
    }
    
    function handleSeek(event) {
        const value = parseFloat(event.target.value);
        
        if (duration && audioRef.current) {
            const newTime = (value / 100) * duration;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }

    function formatTime(seconds:number){
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    };

    return(
            
        <div className={styles.player}>

            <div className={styles.left}>
                <img src={src} alt="Portada" className={styles.cover} />
                <div className={styles.info}>
                <h3>{title}</h3>
                <p>{autor}</p>
                </div>
            </div>

            <div className={styles.center}>
                <div className={styles.controls}>
                    <img src="./icons/audio/previous.png" alt="Previous" />
                    <img onClick={togglePlay} src={
                        isPlaying ?
                        './icons/audio/pause.png'
                        : 
                        './icons/audio/play.png' 
                        } alt="Play/Pause" />    
                    <img src="./icons/audio/next.png" alt="Next" />
                </div>

                <div className={styles.progress}>
                
                <span>{formatTime(currentTime)} </span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                    style={{'--progress': `${duration ? (currentTime / duration) * 100 : 0}%`} as React.CSSProperties }
                />
                <span>{time}</span>
                </div>
            </div>

        <audio ref={audioRef} autoPlay src="./sound/Ordinary.mp3" />
        </div>
    );
}
export default SoundPlayer;
