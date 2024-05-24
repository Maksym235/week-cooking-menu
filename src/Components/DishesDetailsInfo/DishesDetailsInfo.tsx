import { FC, useState } from "react";
import styles from "./DishesDetailsInfo.module.css";
import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import { ModalConteiner } from "../ModalConteiner/ModalContainer";
import { EditDishInfo } from "../Modals/EditDishInfo/EditDishInfo";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from "/public/icon_pencil.svg?react";
import { useTranslation } from "react-i18next";
interface IProps {
	dishId: string;
}
const GET_DISH = gql`
	query Query($getDishByIdId: ID!) {
		getDishById(id: $getDishByIdId) {
			id
			category
			name
		}
	}
`;

const categoryColors: Record<string, string> = {
	Breakfast: "#E8E0FF",
	Lunch: "#FFEDC8 ",
	Dinner: "#CCF2FF",
};
export const DishesDetailsInfo: FC<IProps> = ({ dishId }) => {
	const { t } = useTranslation();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { data, loading, error } = useQuery(GET_DISH, {
		variables: {
			getDishByIdId: dishId,
		},
	});
	const toggleAddIngModal = () => {
		setIsOpenModal((state) => !state);
	};
	// const categoryData = ["Lunch", "Dinner", "breakfast"];
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
		<div className={styles.conteiner}>
			<div className={styles.headerCard}>
				<p>{t(`DishesPage.dishDetails`)}</p>
				<button onClick={toggleAddIngModal} className={styles.headerBtn}>
					<EditSvg fill="var(--accentColor)" stroke="var(--accentColor)" />
					{t(`DishesPage.editDish`)}
				</button>
			</div>
			<div className={styles.detailsConteiner}>
				<img
					src="https://loremflickr.com/640/480/food"
					alt="img"
					className={styles.img}
				/>
				<div className={styles.textConteiner}>
					<div className={styles.NameConteiner}>
						<p className={styles.label}>{t(`DishesPage.name`)}:</p>
						<p>
							{data ? data.getDishById.name : `${t(`DishesPage.selectDish`)}`}
						</p>
					</div>
					<div className={styles.CategoryConteiner}>
						<p className={styles.label}>{t(`DishesPage.category`)}:</p>
						<ul className={styles.categoryList}>
							{data
								? data.getDishById.category.map((item: string) => (
										<li
											className={styles.categoryValue}
											style={{ backgroundColor: categoryColors[item] }}
										>
											{item}
										</li>
								  ))
								: `${t(`DishesPage.selectDish`)}`}
						</ul>
					</div>
				</div>
			</div>
			<ModalConteiner
				toggleIsOpen={toggleAddIngModal}
				isOpen={isOpenModal}
				children={
					<EditDishInfo
						// refetchData={refetch}
						toggleIsOpen={toggleAddIngModal}
					/>
				}
			/>
		</div>
	);
};
