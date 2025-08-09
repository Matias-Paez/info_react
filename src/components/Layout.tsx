import { Outlet } from "react-router";
import { useState , useEffect } from "react";
import Navbar from "./Navbar";
import SoundPlayer from "./SoundPlayer";
import Footer from "./Footer"; 

import type { Song } from "../types/Song";
import songGroups from "../data/songsGrups";
import { musicService } from "../data/mock/service";

export default function Layout() {
  const [searchSong, setSearchSong] = useState("");
  const [selectedSong, setSelectedSong] = useState<Song>();
  
  const isSearching = searchSong.trim() !== "";
  const filteredSongs = isSearching ? songGroups.flatMap(group =>
    group.songs.filter(song =>
      song.title.toLowerCase().includes(searchSong.toLowerCase())
    )): [];

  
  const [favoritos, setFavoritos] = useState<Song[]>([]);

  useEffect( () => {
    loadSongsFavorites();
  } , []);

  const loadSongsFavorites = async () => {
    try{
      const fav = await musicService.getSongsFav();
      setFavoritos(fav);
    }catch( error){
      console.error('error ' , error);
    }
  }
    
  const toggleFavorito = async (id: string) => {  
    await musicService.toggleFavorite(id);
    await loadSongsFavorites(); // recarga la lista actualizada
  };
  
  return (
    <>
      <Navbar setSearchSong={setSearchSong} searchSong={searchSong} />
      <main style={{ padding: "3rem" }}>
        <Outlet context={{ filteredSongs, isSearching, selectedSong, setSelectedSong ,favoritos ,toggleFavorito}} />
      </main>
      
      <div style={{padding:'16px'}}>
        {selectedSong && <SoundPlayer song={selectedSong} key={selectedSong.id} />}
      </div>
      
      <Footer />
    </>
  );
}
