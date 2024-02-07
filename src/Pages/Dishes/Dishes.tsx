import styles from "./Dishes.module.css";
import { DishesDetailsInfo } from "../../Components/DishesDetailsInfo/DishesDetailsInfo.tsx";
import { PageBar } from "../../Components/PageBar/PageBar.tsx";
import { DishesIngredients } from "../../Components/DishesDetailsInfo/DishesIngredients/DishesIngredients.tsx";
import { DishListContainer } from "../../Components/DishesDetailsInfo/DishListContainer/DishListContainer.tsx";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
const GET_DISH = gql`
	query Query($getDishByIdId: ID!) {
		getDishById(id: $getDishByIdId) {
			category
			description
			id
			ingredients {
				name
				category
				defaultValue
				description
			}
			name
		}
	}
`;

const Dishes = () => {
	const [currentDish, setCurrentDish] = useState<string>("");
	const { data, loading, error } = useQuery(GET_DISH, {
		variables: {
			getDishByIdId: currentDish,
		},
	});
	const setSelectedDish = (id: string) => {
		setCurrentDish(id);
	};
	if (loading) {
		<div>loading...</div>;
	}
	if (error) {
		console.log(error);
		toast.error(`${error.message}`, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
	return (
		<main className={styles.main_conteiner}>
			<PageBar title="Dishes" />
			{/*<DishesIngredients/>*/}
			<div className={styles.info_conteiner}>
				<DishesDetailsInfo dish={data} loading={loading} />
				<DishesIngredients ings={data && data.ingredients} />
			</div>
			<DishListContainer setDish={setSelectedDish} />
		</main>
	);
};

export default Dishes;
