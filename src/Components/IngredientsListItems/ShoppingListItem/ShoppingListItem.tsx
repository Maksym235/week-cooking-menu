import styles from "./ShoppingListItem.module.css";
import {FC} from "react";
export interface IItem {
    img: string
    name: string
}
export const ShoppingListItem:FC<IItem> = ({img, name}) => {
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