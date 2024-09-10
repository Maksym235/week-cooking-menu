import { FC, useState } from "react";
import styles from "./WeekSettingsBlock.module.css";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { ModalConteiner } from "../ModalConteiner/ModalContainer";
import { ShowProductList } from "../Modals/ShowProductList/ShowProductList";
import { gql, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { Loading } from "../Loading/Loading";
// import { useMutation, useQuery, gql } from "@apollo/client";
// import axios from "axios";
// import "dayjs/locale/uk-ua";
interface IPeriods {
	period1: string;
	period2: string;
}

interface Iprops {
	openModal: () => void;
	periods: IPeriods;
	refetchData: any;
	weekId: string;
}
const GET_PRODUCTS_LIST = gql`
	query Query($getProductsListId: ID!) {
		getProductsList(id: $getProductsListId)
	}
`;
// const CREATE_INITIAL_WEEK = gql`
// 	mutation Mutation($content: AddWeek!) {
// 		createWeek(content: $content) {
// 			week {
// 				l {
// 					name
// 					id
// 				}
// 				day
// 				d {
// 					name
// 					id
// 				}
// 				b {
// 					name
// 					id
// 				}
// 			}
// 			period2
// 			period1
// 		}
// 	}
// `;
export const WeekSettingsBlock: FC<Iprops> = ({
	periods,
	refetchData,
	weekId,
}) => {
	const { t } = useTranslation();
	// const [createWeek, { data, loading, error }] =
	// 	useMutation(CREATE_INITIAL_WEEK);
	const { data, loading, error } = useQuery(GET_PRODUCTS_LIST, {
		variables: {
			getProductsListId: weekId,
			fetchPolicy: "no-cache",
		},
	});
	dayjs().locale("uk-ua");
	const currentWeekMonday = dayjs().day(1).format("YYYY-MM-DD");
	const [isOpenModal, setIsModalOpen] = useState(false);

	const handleChangeWeek = () => {
		if (currentWeekMonday === periods.period1) {
			// console.log("create week ");
			// console.log();
			const nextWeekMonday = dayjs(currentWeekMonday)
				.add(7, "days")
				.format("YYYY-MM-DD");
			refetchData({
				period: nextWeekMonday,
			});
			return;
		}
		refetchData({
			period: currentWeekMonday,
		});
	};
	const toggleProductListModal = () => {
		setIsModalOpen((state) => !state);
	};
	if (loading) {
		<Loading />;
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
		<div className={styles.container}>
			<div className={styles.periods_container}>
				<p className={styles.period}>{periods.period1}</p>
				<span> - </span>
				<p className={styles.period}>{periods.period2}</p>
			</div>
			<button onClick={handleChangeWeek} className={styles.btn}>
				{currentWeekMonday === periods.period1
					? t(`MenuPage.nextWeek`)
					: t(`MenuPage.currentWeek`)}
			</button>
			<button onClick={toggleProductListModal} className={styles.btn}>
				{t(`MenuPage.getShoppingList`)}
			</button>
			<ModalConteiner
				toggleIsOpen={toggleProductListModal}
				isOpen={isOpenModal}
				children={
					<ShowProductList
						data={data ? data.getProductsList : []}
						toggleIsOpen={toggleProductListModal}
					/>
					// <SetToDayNewDish
					// 	weekId={data.getWeekByPeriod.id}
					// 	currentDay={currentDay}
					// 	dayData={data.getWeekByPeriod.week.find(
					// 		(item: IWeekDay) =>
					// 			item.day.toLowerCase() === currentDay.day.toLowerCase(),
					// 	)}
					// 	refetchData={refetch}
					// 	mealtime={editedMealtime}
					// toggleIsOpen={toggleCreateMenuModal}
					// />
				}
			/>
		</div>
	);
};
