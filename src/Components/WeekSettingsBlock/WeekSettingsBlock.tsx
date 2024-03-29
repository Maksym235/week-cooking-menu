import { FC } from "react";
import styles from "./WeekSettingsBlock.module.css";
import dayjs from "dayjs";
import { useMutation, useQuery, gql } from "@apollo/client";
import axios from "axios";
// import "dayjs/locale/uk-ua";
interface IPeriods {
	period1: string;
	period2: string;
}

interface Iprops {
	openModal: () => void;
	periods: IPeriods;
}

const CREATE_INITIAL_WEEK = gql`
	mutation Mutation($content: AddWeek!) {
		createWeek(content: $content) {
			week {
				l {
					name
					id
				}
				day
				d {
					name
					id
				}
				b {
					name
					id
				}
			}
			period2
			period1
		}
	}
`;
const GET_NEXT_WEEK = gql``;
export const WeekSettingsBlock: FC<Iprops> = ({ openModal, periods }) => {
	const [createWeek, { data, loading, error }] =
		useMutation(CREATE_INITIAL_WEEK);
	dayjs().locale("uk-ua");
	const currentWeekMonday = dayjs().day(1).format("YYYY-MM-DD");
	console.log(currentWeekMonday);

	const handleChangeWeek = () => {
		if (currentWeekMonday !== periods.period1) {
			console.log("create week ");
			return;
		}
		console.log("f");
	};
	return (
		<div className={styles.container}>
			<div className={styles.periods_container}>
				<p className={styles.period}>{periods.period1}</p>
				<span> - </span>
				<p className={styles.period}>{periods.period2}</p>
			</div>
			<button onClick={handleChangeWeek} className={styles.btn}>
				{currentWeekMonday === periods.period1 ? `prew week` : `next week`}
			</button>
			<button onClick={openModal} className={styles.btn}>
				Create new list
			</button>
			<button className={styles.btn}>save this list</button>
		</div>
	);
};
