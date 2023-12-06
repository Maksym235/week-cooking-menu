import styles from './IngredientsList.module.css'
import {useEffect, useState} from "react";
import {useSearchParams } from "react-router-dom";

export const IngredientsList = ({setCurrent}: any) => {
    const [curItem, setCurItem] = useState('')
    const [searchParams] = useSearchParams ();
    const currentList= searchParams.get('currentList')
    const [curListState, setCurListState] = useState(currentList)
    useEffect(() => {
        setCurListState(currentList)
        setCurItem('')
    }, [currentList])
    const setCurrentIng = (item: any) => {
        setCurrent(item)
        setCurItem(item.id)
    }
    const data = [
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "Bicycle",
            "id": "1"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "male",
            "id": "2"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "City",
            "id": "3"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "responsive transmitter",
            "id": "4"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "black",
            "id": "5"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "mole quantify",
            "id": "6"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "Alabama wildly wherever",
            "id": "7"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "purple",
            "id": "8"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "nisi methodologies alliance",
            "id": "9"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "writ",
            "id": "10"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "Sleek Neither Netherlands",
            "id": "11"
        },
        {
            "img": "https://loremflickr.com/640/480/food",
            "name": "emulation Jaguar Expanded",
            "id": "12"
        }
    ]
return (
<div className={styles.list_conteiner}>
    <div className={styles.listHeader}>
        <p>Your ingredients</p>
        <button className={styles.listHeaderBtn}>Add ingredients</button>
    </div>
    {curListState === 'shoppingList' && <ul className={styles.list}>
        {data.map(item => <li onClick={() => setCurrentIng(item)} className={ curItem === item.id ? styles.list_item_current : styles.list_item} key={item.id}>
            <img className={styles.ing_image} src={item.img} alt={item.name}/>
            <p>{item.name}</p>
        </li>)}
    </ul>}
</div>
)
}