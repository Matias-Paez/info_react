import { Link } from 'react-router';
import styles from './ItemCategory.module.css'

type Props = {
    id: number;
    name : string;
}
export default function ItemCategory({id , name} : Props){
    return(
        <Link className={styles.link} to={`/category/${id}`}>
            <li className= {styles.categoria_item}> {name}</li>
        </Link>
    );
}