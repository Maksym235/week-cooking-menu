import styles from './Dishes.module.css'
import {DishesDetailsInfo} from "../../Components/DishesDetailsInfo/DishesDetailsInfo.tsx";
import {PageBar} from "../../Components/PageBar/PageBar.tsx";
import {DishesIngredients} from "../../Components/DishesDetailsInfo/DishesIngredients/DishesIngredients.tsx";
import {DishListContainer} from "../../Components/DishesDetailsInfo/DishListContainer/DishListContainer.tsx";
const Dishes = () => {
return (
<main className={styles.main_conteiner}>
    <PageBar title='Dishes'/>
    {/*<DishesIngredients/>*/}
    <div className={styles.info_conteiner}>
    <DishesDetailsInfo/>
    <DishesIngredients/>
    </div>
    <DishListContainer/>
</main>
)
}

export  default  Dishes