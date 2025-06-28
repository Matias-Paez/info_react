import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
import SongCardContainer from './components/SongCardcontainer'
import SoundPlayer from './components/SoundPlayer.tsx'

import songGroups from './data/songsGrups.ts';

function App() {
  const [selectedSong, setSelectedSong] = useState({title:'- . -' , autor:'-' , time:'-' , src:'/icons/song/default.png'}); //default 
  
  function handleSongSelect(song) {
    setSelectedSong(song); // Guarda la canción seleccionada
  };

  return (
    <>
      <Navbar/>
        <main style={{ padding: "32px" }}>
        <div>        
          { songGroups.map( (grup) =>
          (
            <SongCardContainer
            title={grup.title}
            key={grup.id}
            >
              {grup.songs.map((song) =>(
                <SongCard
                title={song.title}
                autor={song.autor}
                time= {song.time}
                src={song.src}
                key={song.id}
                onClick = {() => handleSongSelect(song) }
                />
              ))}
            </SongCardContainer>
          ))}
        </div>
      </main>

      <div style={{padding: '16px'}}>
        {selectedSong && <SoundPlayer song={selectedSong} key={selectedSong.id} />}
      </div>
      
    </>
  )
}

export default App
