import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./Navbar";
import SoundPlayer from "./SoundPlayer";
import Footer from "./Footer"; 
import songGroups from "../data/songsGrups";
import type { Song } from "../types/Song";

export default function Layout() {
  const [searchSong, setSearchSong] = useState("");
  const [selectedSong, setSelectedSong] = useState<Song>();

  const isSearching = searchSong.trim() !== "";

  const filteredSongs = isSearching
    ? songGroups.flatMap(group =>
        group.songs.filter(song =>
          song.title.toLowerCase().includes(searchSong.toLowerCase())
        )
      )
    : [];

  return (
    <>
      <Navbar setSearchSong={setSearchSong} />
      <main style={{ padding: "3rem" }}>
        <Outlet context={{ filteredSongs, isSearching, songGroups, selectedSong, setSelectedSong }} />
      </main>
      
      <div style={{padding:'16px'}}>
        {selectedSong && <SoundPlayer song={selectedSong} key={selectedSong.id} />}
      </div>
      
      <Footer />
    </>
  );
}
