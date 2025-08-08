const categorias  = [
  { id: 1, name: "Trap" },
  { id: 2, name: "Reggaetón" },
  { id: 3, name: "Pop" },
  { id: 4, name: "Electro-pop" },
  { id: 5, name: "Urbano" },
  { id: 6, name: "Indie-pop" },
  { id: 7, name: "Disco" },
  { id: 8, name: "Alternativa" },
  { id: 9, name: "Rap melódico" },
];

const musicDB = [
  {
    id: "1",
    title: "Tus canciones favoritas",
    songs: [
      { id: "1", title: "Golfista", autor: "Duki", time: "2:54", src: "/assets/golfista.jpeg", categoria: categorias[0] },
      { id: "2", title: "BZRP Music Sessions #52", autor: "Bizarrap, Quevedo", time: "3:18", src: "/assets/bzrp52.jpg", categoria: categorias[6] },
      { id: "3", title: "Ojitos Lindos", autor: "Bad Bunny, Bomba Estéreo", time: "4:18", src: "/assets/ojitos.jpeg", categoria: categorias[7] },
      { id: "4", title: "La Nena de Argentina", autor: "María Becerra", time: "2:59", src: "/assets/nena.jpeg", categoria: categorias[5] },
      { id: "5", title: "Miénteme", autor: "TINI, María Becerra", time: "2:45", src: "/assets/mienteme.jpeg", categoria: categorias[1] },
      { id: "6", title: "Dance The Night", autor: "Dua Lipa", time: "2:56", src: "/assets/dance.jpeg", categoria: categorias[6] },
    ],
  },
  {
    id: "2",
    title: "Pop internacional",
    songs: [
      { id: "7", title: "As It Was", autor: "Harry Styles", time: "2:47", src: "/assets/asitwas.jpg", categoria: categorias[6] },
      { id: "8", title: "Levitating", autor: "Dua Lipa", time: "3:23", src: "/assets/levitating.jpg", categoria: categorias[4] },
      { id: "9", title: "Anti-Hero", autor: "Taylor Swift", time: "3:11", src: "/assets/antihero.jpeg", categoria: categorias[6] },
      { id: "10", title: "About Damn Time", autor: "Lizzo", time: "3:13", src: "/assets/lizzo.jpeg", categoria: categorias[7] },
      { id: "11", title: "Flowers", autor: "Miley Cyrus", time: "3:20", src: "/assets/flowers.jpeg", categoria: categorias[6] },
      { id: "12", title: "Stay", autor: "The Kid LAROI, Justin Bieber", time: "2:22", src: "/assets/stay.jpeg", categoria: categorias[2] },
    ],
  },
  {
    id: "3",
    title: "Recomendado para vos",
    songs: [
      { id: "13", title: "Blinding Lights", autor: "The Weeknd", time: "3:20", src: "/assets/blinding.jpg", categoria: categorias[3] },
      { id: "14", title: "Despechá", autor: "Rosalía", time: "2:36", src: "/assets/despecha.jpeg", categoria: categorias[1] },
      { id: "15", title: "Tusa", autor: "Karol G, Nicki Minaj", time: "3:20", src: "/assets/tusa.jpeg", categoria: categorias[1] },
      { id: "16", title: "MONTERO (Call Me By Your Name)", autor: "Lil Nas X", time: "2:17", src: "/assets/montero.jpeg", categoria: categorias[4] },
      { id: "17", title: "abcdefu", autor: "GAYLE", time: "2:49", src: "/assets/abcdefu.jpeg", categoria: categorias[6] },
      { id: "18", title: "Kill Bill", autor: "SZA", time: "2:33", src: "/assets/killbill.jpg", categoria: categorias[7] },
    ],
  },
  {
    id: "4",
    title: "Trap argentino",
    songs: [
      { id: "19", title: "Givenchy", autor: "Duki", time: "2:41", src: "/assets/givenchy.jpeg", categoria: categorias[0] },
      { id: "20", title: "Hola Perdida", autor: "KHEA, TINI", time: "3:00", src: "/assets/holaperdida.jpeg", categoria: categorias[1] },
      { id: "21", title: "Entre Nosotros", autor: "Tiago PZK, Lit Killah", time: "2:50", src: "/assets/entrenosotros.jpeg", categoria: categorias[8] },
      { id: "22", title: "Además de Mí (Remix)", autor: "Rusherking, KHEA, Tiago PZK, Duki, María Becerra", time: "4:21", src: "/assets/ademasdemi.jpeg", categoria: categorias[1] },
      { id: "23", title: "Además de Mí (original)", autor: "Rusherking, Tiago PZK", time: "2:52", src: "/assets/ademasdemioriginal.jpeg", categoria: categorias[8] },
      { id: "24", title: "She Don't Give a FO", autor: "Duki", time: "2:40", src: "/assets/dukifo.jpeg", categoria: categorias[0] },
    ],
  },
];

// Get next available ID
export const getNextId = () => {
  return Math.max(...musicDB.map((group) => Math.max( ...group.songs.map((song) => Number(song.id) )))) + 1;
};
// estoy en la rama entrega_4 
export { musicDB };
