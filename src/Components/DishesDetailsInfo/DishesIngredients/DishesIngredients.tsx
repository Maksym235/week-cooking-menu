import { FC, useState } from "react";
import styles from "./DishesIngredients.module.css";
import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import { ModalConteiner } from "../../ModalConteiner/ModalContainer";
import { EditDishIngredients } from "../../Modals/EditDishIngredients/EditDishIngredients";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from "/public/icon_pencil.svg?react";
const GET_INGS = gql`
	query Query($getDishByIdId: ID!) {
		getDishById(id: $getDishByIdId) {
			ingredients {
				name
				category
				defaultValue
			}
		}
	}
`;
export interface IIng {
	img: string;
	name: string;
	id: string;
}
interface IProps {
	dishId: string;
}
export const DishesIngredients: FC<IProps> = ({ dishId }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { data, loading, error } = useQuery(GET_INGS, {
		variables: {
			getDishByIdId: dishId,
		},
	});

	const toggleAddIngModal = () => {
		setIsOpenModal((state) => !state);
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
	// const data: IIng[] = [
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "Bicycle",
	// 		id: "1",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "male",
	// 		id: "2",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "City",
	// 		id: "3",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "responsive transmitter",
	// 		id: "4",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "Bicycle",
	// 		id: "1",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "male",
	// 		id: "2",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "City",
	// 		id: "3",
	// 	},
	// 	{
	// 		img: "https://loremflickr.com/640/480/food",
	// 		name: "responsive transmitter",
	// 		id: "4",
	// 	},
	// ];
	return (
		<div className={styles.conteiner}>
			<div className={styles.headerCard}>
				<p className={styles.headerTitle}>Dishes ingredients</p>
				<button onClick={toggleAddIngModal} className={styles.headerBtn}>
					<EditSvg fill="var(--accentColor)" stroke="var(--accentColor)" /> Edit
					ingredients
				</button>
			</div>
			<div className={styles.listConteiner}>
				<ul className={styles.list}>
					{data
						? data.getDishById.ingredients.map(
								({
									name,
									category,
									defaultValue,
								}: {
									name: string;
									category: string;
									defaultValue: number;
								}) => (
									<li>
										<div className={styles.itemConteiner}>
											<img
												src="https://loremflickr.com/640/480/food"
												alt={name}
												className={styles.img}
											/>
											<div className={styles.textConteiner}>
												<p className={styles.itemTitle}>{name}</p>
												<p className={styles.itemText}>{defaultValue}</p>
												<p className={styles.itemText}>{category}</p>
											</div>
										</div>
									</li>
								),
						  )
						: "select dish"}
				</ul>
			</div>
			<ModalConteiner
				toggleIsOpen={toggleAddIngModal}
				isOpen={isOpenModal}
				children={
					<EditDishIngredients
						// refetchData={refetch}
						ings={data}
						toggleIsOpen={toggleAddIngModal}
					/>
				}
			/>
		</div>
	);
};
