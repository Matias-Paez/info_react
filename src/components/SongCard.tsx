import styles from './SongCardStyle.module.css'

type SongCardProps ={
    title :  string,
    autor : string,
    time : string,
    src : string,
};


function SongCard(props:SongCardProps){
    const {title, autor, time, src}= props;

    return(
        <article className={styles.card}>
            <img className={styles.image} src={src} alt={title} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.author}>{autor}</p>
            <p className={styles.time}>{time} min</p>
        </article>
    );
}

export default SongCard