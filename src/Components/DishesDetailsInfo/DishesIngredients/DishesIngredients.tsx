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
import { Loading } from "../../Loading/Loading";
import { useTranslation } from "react-i18next";
const GET_INGS = gql`
	query Query($getDishByIdId: ID!) {
		getDishById(id: $getDishByIdId) {
			ingredients {
				id
				name
				category
				defaultValue
				count
				weightType
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
	const { t } = useTranslation();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { data, loading, error, refetch } = useQuery(GET_INGS, {
		variables: {
			getDishByIdId: dishId,
		},
	});

	const toggleAddIngModal = () => {
		setIsOpenModal((state) => !state);
	};
	if (loading) {
		<Loading />;
	}
	if (error) {
		console.log(error);
		// toast.error(`${error.message}`, {
		// 	position: "top-center",
		// 	autoClose: 3000,
		// 	hideProgressBar: false,
		// 	closeOnClick: true,
		// 	pauseOnHover: true,
		// 	draggable: true,
		// 	progress: undefined,
		// 	theme: "light",
		// });
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
				<p className={styles.headerTitle}>{t(`DishesPage.dishIngs`)}</p>
				<button
					disabled={!data}
					onClick={toggleAddIngModal}
					className={
						data
							? `${styles.headerBtn}`
							: `${styles.headerBtn} ${styles.disabledBtn}`
					}
				>
					<EditSvg
						fill={data ? "var(--accentColor)" : "var(--silverColor)"}
						stroke={data ? "var(--accentColor)" : "var(--silverColor)"}
					/>{" "}
					{t(`DishesPage.editIngs`)}
				</button>
			</div>
			<div className={styles.listConteiner}>
				<ul className={styles.list}>
					{data ? (
						data.getDishById.ingredients.map(
							({
								name,
								category,
								// defaultValue,
								count,
								weightType,
							}: {
								name: string;
								category: string;
								// defaultValue: number;
								count: number;
								weightType: string;
							}) => (
								<li>
									<div className={styles.itemConteiner}>
										<div className={styles.img}>
											{name ? name.slice(0, 1) : ""}
										</div>
										<div className={styles.textConteiner}>
											<p className={styles.itemTitle}>{name}</p>
											<p className={styles.itemText}>
												{count}
												{weightType}
											</p>
											<p className={styles.itemText}>{category}</p>
										</div>
									</div>
								</li>
							),
						)
					) : (
						<p className={styles.emptyIngs}>{t(`DishesPage.selectDish`)}</p>
					)}
				</ul>
			</div>
			<ModalConteiner
				toggleIsOpen={toggleAddIngModal}
				isOpen={isOpenModal}
				children={
					<EditDishIngredients
						refetchData={refetch}
						dishId={dishId}
						ings={data}
						toggleIsOpen={toggleAddIngModal}
					/>
				}
			/>
		</div>
	);
};
