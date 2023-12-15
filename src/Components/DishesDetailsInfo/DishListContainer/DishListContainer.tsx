import styles from './DishListContainer.module.css'
import {FC} from "react";
import {DishesList} from "../DishesList/DishesList.tsx";

const CATEGORIES: string[] = ['Breakfast', "Lunch", "Dinner"]
export const DishListContainer:FC = () => {
    console.log(CATEGORIES)
return (
    <div className={styles.container}>
        <div className={styles.headerCard}>
            <p className={styles.headerTitle}>List of dishes for today</p>
            <button className={styles.headerBtn}>Edit dishes</button>
        </div>
        <div className={styles.listFlex}>
            {CATEGORIES.map(item => <DishesList title={item}/>)}
        </div>

    </div>
)
}