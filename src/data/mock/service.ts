import { musicDB  } from "./data";
// Simulate API delay
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API service with CRUD operations
export const musicService = {
  // GET all songs
  async getAllSongs() {
    await delay(300);
    // Load from localStorage if available, fallback to initial data
    const stored = localStorage.getItem('musicDB');
    if (stored) {
      return JSON.parse(stored);
    }
    return [...musicDB];
  },

  // GET song by ID
  async getSongById(id? : string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
   // const songs = stored ? JSON.parse(stored) : musicDB;
    const groups = stored ? JSON.parse(stored) : musicDB;
    const song  = groups.flatMap( group => group.songs).find( song => song.id.toString()===id);
    //const song = songs.find((s) => s.id === parseInt(id));
    if (!song) {
      throw new Error('Song not found');
    }
    return song;
  },

  // GET songs by category
  async getSongsByCategory(category_id ? : string ) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const groups = stored ? JSON.parse(stored) : musicDB;

    if (!category_id) {
      throw new Error('Genre parameter is required');
    }
    const songs = groups.flatMap( group => 
      group.songs.filter( song => song.categoria.id.toString() == category_id)
    );
    return songs;
  },
   

  // GET songs by artist
  async getSongsFav() {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const groups = stored ? JSON.parse(stored) : musicDB;

    const favorites  = groups.flatMap( group => group.songs.filter(song=> song.favorite));

    return favorites;
  },

  // TOGGLE favorite status
  async toggleFavorite(id: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const groups = stored ? JSON.parse(stored) : musicDB;

    const updatedGroups = groups.map(group => ({
      ...group,
      songs: group.songs.map(song =>
        song.id.toString() === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    }));

    localStorage.setItem('musicDB', JSON.stringify(updatedGroups));
    return true;
  },

  // GET all genres with songs grouped by genre
  async getGenres() {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    const genreMap = {};

    songs.forEach((song) => {
      song.genre.forEach((genre) => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        genreMap[genre].push(song);
      });
    });

    // Convert to array format with genre name and songs
    return Object.keys(genreMap)
      .map((genre) => ({
        genre,
        songs: genreMap[genre],
      }))
      .sort((a, b) => a.genre.localeCompare(b.genre));
  },

  // Search songs
  async searchSongs(query) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!query) return songs;

    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase()) ||
        song.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))
    );
  },
};
