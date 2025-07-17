import { useState } from 'react'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
import SongCardContainer from './components/SongCardcontainer'
import SoundPlayer from './components/SoundPlayer.tsx'
import './App.css'
import styles from './App.module.css';
import songGroups from './data/songsGrups.ts';
import type { Song } from './types/Song.ts'

function App() {
  const [selectedSong, setSelectedSong] = useState<Song>();
  const [searchSong, setSearchSong]= useState("");

  const isSearching = searchSong.trim() !== ""; //para determinar si estoy realizando una busqueda

  //filtro las canciones 
  const filterSongs = isSearching ? songGroups.flatMap(group =>
    group.songs.filter( song => 
      song.title.toLowerCase().includes(searchSong)
    )
  ) : [];
  
  return (
    <>
      <Navbar setSearchSong={setSearchSong}/>

      <main className={styles.main}>
        <div className={styles.content}>
          {isSearching? ( filterSongs.length === 0? (
            <p>No se encontraron resultados.</p>
          ) : (
            //mostramos los resultados de las canciones
            <SongCardContainer title="Resultados" >
              <div className={styles.content_resultados}>
                  {filterSongs.map( (song) => (
                    <SongCard
                    key={song.id}
                    song={song}
                    setSelectedSong={setSelectedSong}
                    />
                    
                  ))
                }
              </div>
            </SongCardContainer>
          )
        ): (
          //Mostramos todos los grupos
          songGroups.map((group) => (
            <SongCardContainer title={group.title} key={group.id}>
              {group.songs.map( (song) => (
                    <SongCard
                      key={song.id}
                      song={song}
                      setSelectedSong={setSelectedSong}
                    />
                  ))}
            </SongCardContainer>
          ))
        )}
        </div>
      </main>

      <div className={styles.div_music} >
        {selectedSong && <SoundPlayer song={selectedSong} key={selectedSong.id} />}
      </div>
      
    </>
  )
}

export default App
