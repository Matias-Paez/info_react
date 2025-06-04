import { type ReactNode } from "react";
import styles from './SongCardContainer.module.css';

type SongCardContainerProps = {
    title : string,
    children: ReactNode,
};

function SongCardContainer(props : SongCardContainerProps){
    const {title , children} = props;

    return (
        <section className={styles.article_container}>
            <h2 className={styles.title} >{title}</h2>
            <div className={styles.songs}>
                {children}
            </div>
        </section>
    );
};

export default SongCardContainer