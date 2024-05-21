import { FC } from "react";
import styles from "./WeekSettingsBlock.module.css";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
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
}

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
export const WeekSettingsBlock: FC<Iprops> = ({ periods, refetchData }) => {
	const { t } = useTranslation();
	// const [createWeek, { data, loading, error }] =
	// 	useMutation(CREATE_INITIAL_WEEK);
	dayjs().locale("uk-ua");
	const currentWeekMonday = dayjs().day(1).format("YYYY-MM-DD");

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
			<button className={styles.btn}>{t(`MenuPage.getShoppingList`)}</button>
		</div>
	);
};
