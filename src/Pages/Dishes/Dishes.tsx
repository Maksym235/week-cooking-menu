import {DishesDetailsInfo} from "../../Components/DishesDetailsInfo/DishesDetailsInfo.tsx";
import {DishesList} from "../../Components/DishesList/DishesList.tsx";
import {PageBar} from "../../Components/PageBar/PageBar.tsx";

const Dishes = () => {
return (
<main style={{width: '100%', marginLeft: '16px'}}>
    <PageBar title='Dishes'/>
    <DishesDetailsInfo/>
    <DishesList/>
</main>
)
}

export  default  Dishes