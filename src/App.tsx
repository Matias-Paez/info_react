import './App.css'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
import SongCardContainer from './components/SongCardcontainer'

import songGroups from './data/songsGrups.ts';


function App() {
  return (
    <>
      <Navbar/>
      <main style={{ padding: "32px" }}>
        
      { songGroups.map( (grup) =>
      (
        <SongCardContainer
        title={grup.title}
        >
          {grup.songs.map((song) =>(
            <SongCard
            title={song.title}
            autor={song.autor}
            time= {song.time}
            src={song.src}
            />
          ))}
        </SongCardContainer>
      ))}
      </main>
    </>
  )
}

export default App
