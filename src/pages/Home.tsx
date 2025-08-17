import { useOutletContext } from "react-router";
import SongCardContainer from "../components/SongCardcontainer";
import SongCard from "../components/SongCard";
import ContentCategory from "../components/ContentCategory";
import styles from './Home.module.css';
import type { SongGroup } from "../types/SongGroup";
import type { Song } from "../types/Song";
import { useEffect, useState } from "react";

import { musicService } from '../data/mock/service.ts';

type LayoutData = {
  filteredSongs: Song[];
  isSearching: boolean;
  setSelectedSong: (song: Song) => void;
};

export default function Home() {
  const { filteredSongs, isSearching, setSelectedSong } = useOutletContext<LayoutData>();
  const [loading , setLoading] = useState(false);
  const [songGroups  , setSongGroups] = useState<SongGroup[] | null>(null);
  
  const loadSongs = async () => {
    try{
      setLoading(true);
      const data = await musicService.getAllSongs();
      setSongGroups(data);
    }catch( error){
      console.error('error ' , error);
    } finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    loadSongs();
  } , []);
  
  if(loading){
    return <p>Cargando</p>
  }
  
  if(!songGroups){
    return <p>No hay canciones disponibles.</p>
  }
 
  const categorias = [  
    ...new Map(
        songGroups
        .flatMap(group => group.songs.map(song => song.categoria))
        .map(cat => [cat.id, cat]) // clave: id, valor: objeto categoría
    ).values()
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