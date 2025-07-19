import { useOutletContext } from "react-router";
import SongCardContainer from "../components/SongCardcontainer";
import SongCard from "../components/SongCard";
import ContentCategory from "../components/ContentCategory";
import styles from './Home.module.css';

import type { SongGroup } from "../types/SongGroup";
import type { Song } from "../types/Song";

type LayoutData = {
  filteredSongs: Song[];
  songGroups: SongGroup[];
  isSearching: boolean;
  setSelectedSong: (song: Song) => void;
};

export default function Home() {
  const { filteredSongs, songGroups, isSearching, setSelectedSong } = useOutletContext<LayoutData>();
    
  ///parte nueva 
  const categorias = [
    ...new Set(
        songGroups.flatMap(group => group.songs.map(song => song.categoria))
    ),
  ];

  return (
    <>
      <div className={styles.content} >
        {!isSearching&& <ContentCategory categories={categorias}></ContentCategory>}
        
        {isSearching ? (
          filteredSongs.length === 0 ? (
            <p className={styles.content_p} >No se encontraron resultados.</p>
          ) : (
            <SongCardContainer title="Resultados">
              <div className={styles.content_resultados}>
                {filteredSongs.map((song) => (
                    <SongCard key={song.id} song={song} setSelectedSong={() => setSelectedSong(song)} />
                ))}
              </div>
            </SongCardContainer>
          )
        ) : (
          songGroups.map((group) => (
            <SongCardContainer key={group.id} title={group.title}>
              {group.songs.map((song) => (
                <SongCard key={song.id} song={song} setSelectedSong={() => setSelectedSong(song)} />
              ))}
            </SongCardContainer>
          ))
        )}
      </div>
    </>
  );
};