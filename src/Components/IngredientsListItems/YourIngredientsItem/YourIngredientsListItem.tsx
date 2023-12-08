import styles from "./YourIngredientsListItem.module.css";
import {FC} from "react";
export type IItem = {
    img?: string,
    name?: string,
    id?: string
}
export const YourIngredientsListItem:FC<IItem> = ({img, name, id}) => {
console.log(id)
    return (
<div className={styles.conteiner}>
    <div className={styles.wrapper}>
    <img className={styles.ing_image} src={img} alt={name}/>
    <p>{name}</p>
    </div>
    <div className={styles.icon}></div>
</div>
)
}