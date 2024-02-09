import styles from "./Dishes.module.css";
import { DishesDetailsInfo } from "../../Components/DishesDetailsInfo/DishesDetailsInfo.tsx";
import { PageBar } from "../../Components/PageBar/PageBar.tsx";
import { DishesIngredients } from "../../Components/DishesDetailsInfo/DishesIngredients/DishesIngredients.tsx";
import { DishListContainer } from "../../Components/DishesDetailsInfo/DishListContainer/DishListContainer.tsx";
import { useState } from "react";
const Dishes = () => {
	const [currentDish, setCurrentDish] = useState<string>("");
	const setSelectedDish = (id: string) => {
		setCurrentDish(id);
	};
	return (
		<main className={styles.main_conteiner}>
			<PageBar title="Dishes" />
			{/*<DishesIngredients/>*/}
			<div className={styles.info_conteiner}>
				<DishesDetailsInfo dishId={currentDish} />
				<DishesIngredients dishId={currentDish} />
			</div>
			<DishListContainer setDish={setSelectedDish} />
		</main>
	);
};

export default Dishes;
