import styles from './Ingredients.module.css'
// import {Header} from "../../Components/Header/Header.tsx";
import {IngredientsList} from "../../Components/IngredientsList/IngredientsList.tsx";
import {CreateNewBtn} from "../../Components/CreateNewBtn/CreateNewBtn.tsx";
import {DetailsInfoIngredients} from "../../Components/DetailsInfoIngredients/DetailsInfoIngredients.tsx";
import {useState} from "react";
const Ingredients = () => {
    const [currentIng, setCurrentIng] = useState(null)
    const setCurrentIngredient = (item: any) => {
        setCurrentIng(item)
    }

    return (
<section className={styles.conteiner}>
    {/*<Header title='Ingredients'/>*/}
    <div className={styles.ingWrapper}>
    <IngredientsList setCurrent={setCurrentIngredient}/>
        {currentIng && <DetailsInfoIngredients item={currentIng}/>}
    </div>
    <CreateNewBtn/>
</section>
)
}

export default  Ingredients