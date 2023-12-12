import styles from './IngredientsList.module.css'
import {useEffect, useState} from "react";
import {useSearchParams } from "react-router-dom";
import {YourIngredientsListItem} from "../IngredientsListItems/YourIngredientsItem/YourIngredientsListItem.tsx";
import {ShoppingListItem} from "../IngredientsListItems/ShoppingListItem/ShoppingListItem.tsx";

export const IngredientsList = ({setCurrent}: any) => {
    const titleVariables: any = {
        yourIngs: "Your ingredients",
        shoppingList: "Shopping List  "
    }
    const [curItem, setCurItem] = useState('')
    const [searchParams] = useSearchParams ();
    const currentList= searchParams.get('currentList')
    const [curListState, setCurListState] = useState<string | null>(currentList)
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
        <p>{curListState && titleVariables[curListState]}</p>
        <button className={styles.listHeaderBtn}>Add ingredients</button>
    </div>
    {<ul className={styles.list}>
        {data.map(item => <li onClick={() => setCurrentIng(item)} className={ curItem === item.id ? styles.list_item_current : styles.list_item} key={item.id}>
            {curListState === 'yourIngs' && <YourIngredientsListItem img={item.img} name={item.name} id={item.id}/>}
            {curListState === 'shoppingList' && <ShoppingListItem img={item.img} name={item.name}/>}
            {/*<img className={styles.ing_image} src={item.img} alt={item.name}/>*/}
            {/*<p>{item.name}</p>*/}
        </li>)}
    </ul>}
</div>
)
}