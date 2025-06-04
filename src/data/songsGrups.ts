export type Song = {
  id: string;
  title: string;
  autor: string;
  time: string;
  src: string;
};

export type SongGroup = {
  id: string;
  title: string;
  songs: Song[];
};


export const songGroups : SongGroup[]= [
  {
    id: "1",
    title: "Tus canciones favoritas",
    songs: [
      {
        id: "1",
        title: "Golfista",
        autor: "Duki",
        time: "2:54",
        src: "/assets/golfista.jpeg",
      },
      {
        id: "2",
        title: "BZRP Music Sessions #52",
        autor: "Bizarrap, Quevedo",
        time: "3:18",
        src: "/assets/bzrp52.jpeg",
      },
      {
        id: "3",
        title: "Ojitos Lindos",
        autor: "Bad Bunny, Bomba Estéreo",
        time: "4:18",
        src: "/assets/ojitos.jpeg",
      },
    ],
  },
  {
    id: "2",
    title: "Pop internacional",
    songs: [
      {
        id: "4",
        title: "As It Was",
        autor: "Harry Styles",
        time: "2:47",
        src: "/assets/asitwas.jpeg",
      },
      {
        id: "5",
        title: "Levitating",
        autor: "Dua Lipa",
        time: "3:23",
        src: "/assets/levitating.jpeg",
      },
      {
        id: "6",
        title: "Anti-Hero",
        autor: "Taylor Swift",
        time: "3:11",
        src: "/assets/antihero.jpeg",
      },
    ],
  },
  {
    id: "3",
    title: "Recomendado para vos",
    songs: [
      {
        id: "7",
        title: "Blinding Lights",
        autor: "The Weeknd",
        time: "3:20",
        src: "/assets/blinding.jpeg",
      },
      {
        id: "8",
        title: "Despechá",
        autor: "Rosalía",
        time: "2:36",
        src: "/assets/despecha.jpeg",
      },
      {
        id: "9",
        title: "Tusa",
        autor: "Karol G, Nicki Minaj",
        time: "3:20",
        src: "/assets/tusa.jpeg",
      },
    ],
  },
];
