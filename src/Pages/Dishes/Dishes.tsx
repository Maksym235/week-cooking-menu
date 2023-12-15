import {DishesDetailsInfo} from "../../Components/DishesDetailsInfo/DishesDetailsInfo.tsx";
import {PageBar} from "../../Components/PageBar/PageBar.tsx";
import {DishesIngredients} from "../../Components/DishesDetailsInfo/DishesIngredients/DishesIngredients.tsx";
import {DishListContainer} from "../../Components/DishesDetailsInfo/DishListContainer/DishListContainer.tsx";
const Dishes = () => {
return (
<main style={{width: '100%', marginLeft: '16px'}}>
    <PageBar title='Dishes'/>
    {/*<DishesIngredients/>*/}
    <div style={{display: 'flex', gap: "24px"}}>
    <DishesDetailsInfo/>
    <DishesIngredients/>
    </div>
    <DishListContainer/>
</main>
)
}

export  default  Dishes