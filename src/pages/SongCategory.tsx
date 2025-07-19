import { useOutletContext, useParams } from "react-router"
import SongCard from "../components/SongCard";
import SongCardContainer from "../components/SongCardcontainer";


import type { Song } from "../types/Song";
import type { SongGroup } from "../types/SongGroup";

type LayoutData = {
    songGroups: SongGroup[];
    setSelectedSong: (song: Song) => void;
}

export default function SongCategory(){
    const { songGroups, setSelectedSong } = useOutletContext<LayoutData>();
    const {id} = useParams();

    const songs : Song[] =  songGroups.flatMap(group =>
        group.songs.filter(song => song.categoria.id.toString() == id)
    )

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
