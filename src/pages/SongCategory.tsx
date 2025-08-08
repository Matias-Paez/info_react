import { useOutletContext, useParams } from "react-router"
import SongCard from "../components/SongCard";
import SongCardContainer from "../components/SongCardcontainer";


import type { Song } from "../types/Song";
import { useEffect, useState } from "react";
import { musicService } from "../data/mock/service";

type LayoutData = {
    setSelectedSong: (song: Song) => void;
}

export default function SongCategory(){
    const { setSelectedSong } = useOutletContext<LayoutData>();
    const [loading , setLoading]= useState(false);
    const [songs , setSongs]= useState<Song[] | null>(null);
    const {id} = useParams();

    const loadSongCategory = async () => {
        try{
            setLoading(true);
            const data = await musicService.getSongsByCategory(id);
            setSongs(data);
        }catch (error){
            console.error('error ', error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadSongCategory();
    }, [id])

   if(loading){
    return <p>Cargando...</p>
   }

   if(!songs || songs?.length == 0){
    return <p style={{padding:'25px' }}>No se encontrarón canciones.</p>
   }

    //para obtener el nombre de la categoria 
    const categoria = songs.find((song)=> song.categoria.id.toString()== id)?.categoria.name ?? '';
    return(
        <div style={{width:'100%' , maxWidth:'1200px', margin:'0 auto'}}>
            <SongCardContainer title={ categoria}>
                {songs.map((song)=> ( 
                    <SongCard key={song.id} song={song} setSelectedSong={ () => setSelectedSong(song)}/>
                ))}
            </SongCardContainer>
        </div>
    )
}
