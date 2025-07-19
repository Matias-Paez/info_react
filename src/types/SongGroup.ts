import type { Song } from "./Song";

export type SongGroup = {
  id: string;
  title: string;
  songs: Song[];
};
