// src/pages/HomePage.tsx
import { useOutletContext } from "react-router";
import SongCardContainer from "../components/SongCardcontainer";
import SongCard from "../components/SongCard";
import type { Song } from "../types/Song";
import type { SongGroup } from "../types/SongGroup";

type LayoutData = {
  filteredSongs: Song[];
  songGroups: SongGroup[];
  isSearching: boolean;
  setSelectedSong: (song: Song) => void;
};

export default function Home() {
  const { filteredSongs, songGroups, isSearching, setSelectedSong } = useOutletContext<LayoutData>();

  return (
    <div>
      {isSearching ? (
        filteredSongs.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          <SongCardContainer title="Resultados">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} setSelectedSong={() => setSelectedSong(song)} />
            ))}
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
  );
};