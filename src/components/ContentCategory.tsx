import ItemCategory from "./ItemCategory";
import styles from './ContentCategories.module.css';
import type { Category } from "../types/Category";

type PropContentCategory ={
    categories : Category[];
}
export default function ContenCategory({categories} : PropContentCategory){

    
    if(categories)
        return (
            <div>
                <ul className= {styles.lista_categorias}>
                    {categories.map((category)=>(
                        <ItemCategory key={category.id + category.name} id={category.id} name= {category.name} />
                    ))}
                </ul>
            </div>
        );

}