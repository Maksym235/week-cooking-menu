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
            <div className={styles.textWrapper}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>Category: <span className={styles.descriptionValue}>Cheese</span></p>
            <p className={styles.description}>Count: <span className={styles.descriptionValue}>200gram</span></p>
            </div>
        </div>
        <div className={styles.icon}></div>
    </div>
)
}