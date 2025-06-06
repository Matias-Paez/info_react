type Song = {
  id: string;
  title: string;
  autor: string;
  time: string;
  src: string;
};

type SongGroup = {
  id: string;
  title: string;
  songs: Song[];
};


const songGroups : SongGroup[]= [
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
        src: "/assets/bzrp52.jpg",
      },
      {
        id: "3",
        title: "Ojitos Lindos",
        autor: "Bad Bunny, Bomba Estéreo",
        time: "4:18",
        src: "/assets/ojitos.jpeg",
      },
      {
        id: "4",
        title: "La Nena de Argentina",
        autor: "María Becerra",
        time: "2:59",
        src: "/assets/nena.jpeg",
      },
      {
        id: "5",
        title: "Miénteme",
        autor: "TINI, María Becerra",
        time: "2:45",
        src: "/assets/mienteme.jpeg",
      },
      {
        id: "6",
        title: "Dance The Night",
        autor: "Dua Lipa",
        time: "2:56",
        src: "/assets/dance.jpeg",
      },
    ],
  },
  {
    id: "2",
    title: "Pop internacional",
    songs: [
      {
        id: "7",
        title: "As It Was",
        autor: "Harry Styles",
        time: "2:47",
        src: "/assets/asitwas.jpg",
      },
      {
        id: "8",
        title: "Levitating",
        autor: "Dua Lipa",
        time: "3:23",
        src: "/assets/levitating.jpg",
      },
      {
        id: "9",
        title: "Anti-Hero",
        autor: "Taylor Swift",
        time: "3:11",
        src: "/assets/antihero.jpeg",
      },
      {
        id: "10",
        title: "About Damn Time",
        autor: "Lizzo",
        time: "3:13",
        src: "/assets/lizzo.jpeg",
      },
      {
        id: "11",
        title: "Flowers",
        autor: "Miley Cyrus",
        time: "3:20",
        src: "/assets/flowers.jpeg",
      },
      {
        id: "12",
        title: "Stay",
        autor: "The Kid LAROI, Justin Bieber",
        time: "2:22",
        src: "/assets/stay.jpeg",
      },
    ],
  },
  {
    id: "3",
    title: "Recomendado para vos",
    songs: [
      {
        id: "13",
        title: "Blinding Lights",
        autor: "The Weeknd",
        time: "3:20",
        src: "/assets/blinding.jpg",
      },
      {
        id: "14",
        title: "Despechá",
        autor: "Rosalía",
        time: "2:36",
        src: "/assets/despecha.jpeg",
      },
      {
        id: "15",
        title: "Tusa",
        autor: "Karol G, Nicki Minaj",
        time: "3:20",
        src: "/assets/tusa.jpeg",
      },
      {
        id: "16",
        title: "MONTERO (Call Me By Your Name)",
        autor: "Lil Nas X",
        time: "2:17",
        src: "/assets/montero.jpeg",
      },
      {
        id: "17",
        title: "abcdefu",
        autor: "GAYLE",
        time: "2:49",
        src: "/assets/abcdefu.jpeg",
      },
      {
        id: "18",
        title: "Kill Bill",
        autor: "SZA",
        time: "2:33",
        src: "/assets/killbill.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Trap argentino",
    songs: [
      {
        id: "19",
        title: "Givenchy",
        autor: "Duki",
        time: "2:41",
        src: "/assets/givenchy.jpeg",
      },
      {
        id: "20",
        title: "Hola Perdida",
        autor: "KHEA, TINI",
        time: "3:00",
        src: "/assets/holaperdida.jpeg",
      },
      {
        id: "21",
        title: "Entre Nosotros",
        autor: "Tiago PZK, Lit Killah",
        time: "2:50",
        src: "/assets/entrenosotros.jpeg",
      },
      {
        id: "22",
        title: "Además de Mí (Remix)",
        autor: "Rusherking, KHEA, Tiago PZK, Duki, María Becerra",
        time: "4:21",
        src: "/assets/ademasdemi.jpeg",
      },
      {
        id: "23",
        title: "Además de Mí (original)",
        autor: "Rusherking, Tiago PZK",
        time: "2:52",
        src: "/assets/ademasdemioriginal.jpeg",
      },
      {
        id: "24",
        title: "She Don't Give a FO",
        autor: "Duki",
        time: "2:40",
        src: "/assets/dukifo.jpeg",
      },
    ],
  },
];

export default songGroups