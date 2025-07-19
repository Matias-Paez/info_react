import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./Navbar";
import SoundPlayer from "./SoundPlayer";
import Footer from "./Footer"; 

import type { Song } from "../types/Song";
import songGroups from "../data/songsGrups";

export default function Layout() {
  const [searchSong, setSearchSong] = useState("");
  const [selectedSong, setSelectedSong] = useState<Song>();
  const isSearching = searchSong.trim() !== "";
  const filteredSongs = isSearching ? songGroups.flatMap(group =>
    group.songs.filter(song =>
      song.title.toLowerCase().includes(searchSong.toLowerCase())
    )): [];

  const [favoritos, setFavoritos] = useState<Song[]>([]);
  // Agregar/eliminar favoritos
  const toggleFavorito = (song: Song) => {
    if (favoritos.find(f => f.id === song.id)) {
      setFavoritos(favoritos.filter(f => f.id !== song.id));
    } else {
      setFavoritos([...favoritos, song]);
    }
  };

  
  return (
    <>
      <Navbar setSearchSong={setSearchSong} searchSong={searchSong} />
      <main style={{ padding: "3rem" }}>
        <Outlet context={{ filteredSongs, isSearching, songGroups, selectedSong, setSelectedSong ,favoritos ,toggleFavorito}} />
      </main>
      
      <div style={{padding:'16px'}}>
        {selectedSong && <SoundPlayer song={selectedSong} key={selectedSong.id} />}
      </div>
      
      <Footer />
    </>
  );
}
