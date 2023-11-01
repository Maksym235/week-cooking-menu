import styles from './Ingredients.module.css'
// import {Header} from "../../Components/Header/Header.tsx";
import {IngredientsList} from "../../Components/IngredientsList/IngredientsList.tsx";
import {CreateNewBtn} from "../../Components/CreateNewBtn/CreateNewBtn.tsx";
const Ingredients = () => {
return (
<section className={styles.conteiner}>
    {/*<Header title='Ingredients'/>*/}
    <IngredientsList/>
    <CreateNewBtn/>
</section>
)
}

export default  Ingredients