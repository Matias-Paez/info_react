import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
import SongCardContainer from './components/SongCardcontainer'
import SoundPlayer from './components/SoundPlayer.tsx'

import songGroups from './data/songsGrups.ts';

type Song ={
  title:string;
  autor :string;
  time :string;
  src :string;
}

function App() {
  const [selectedSong, setSelectedSong] = useState({title:'- . -' , autor:'-' , time:'-' , src:'/icons/song/default.png'}); //default Song
  const [searchSong, setSearchSong]= useState("");

  const isSearching = searchSong.trim() !== ""; //para determinar si estoy realizando una busqueda


  function handleSongSelect(song:Song) {
    setSelectedSong(song); // Guarda la canción seleccionada
  };

  function handleSearchChange(name: string){
    setSearchSong(name.toLowerCase()); //convierto a minusculas
  }

  //filtro las canciones 
  const filterSongs = isSearching ? songGroups.flatMap(group =>
    group.songs.filter( song => 
      song.title.toLowerCase().includes(searchSong)
    )
  ) : [];
  
  return (
    <>
      <Navbar onSearchChange={handleSearchChange}/>
      
      <main style={{ padding: "24px"}}>

        <div style={{width: '100%' , maxWidth:'1200px' , margin: '0 auto'}}>
          {isSearching? ( filterSongs.length === 0? (
            <p>No se encontraron resultados.</p>
          ) : (
            //mostramos los resultados de las canciones
            <SongCardContainer title="Resultados" >
              <div style={{
                display:'grid', 
                gridTemplateColumns: 'repeat(6, 1fr)' 
                , gap:'24px' 
                , width:'100%'}}>
                  {filterSongs.map( (song) => (
                    <SongCard
                    key={song.id}
                    {...song}
                    onClick={() => handleSongSelect (song)}
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
                      {...song}
                      onClick={() => handleSongSelect (song)}
                    />
                  ))}
            </SongCardContainer>
          ))
        )}
        </div>

      </main>

      <div style={{padding: '16px'}}>
        {selectedSong && <SoundPlayer song={selectedSong} key={selectedSong.id} />}
      </div>
      
    </>
  )
}

export default App
