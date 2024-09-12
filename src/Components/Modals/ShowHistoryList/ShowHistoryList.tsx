import { gql, useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import { Loading } from "../../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { week } from "../../WeekList/week";
import { WeekDay } from "../../WeekDay/WeekDay";
import { IWeekDay } from "../../../types/WeekDay";
import styles from "./ShowHistoryList.module.css";
import { useTranslation } from "react-i18next";
interface IProps {
	period: string;
	toggleIsOpen: () => void;
}
const WEEK_LIST = gql`
	query ExampleQuery($period: String) {
		getWeekByPeriod(period: $period) {
			week {
				l {
					id
					name
				}
				d {
					name
					id
				}
				day
				b {
					name
					id
				}
			}
			period2
			period1
			id
		}
	}
`;
export const ShowHistoryList: FC<IProps> = ({ period, toggleIsOpen }) => {
	const { t } = useTranslation();
	const [currentDay, setCurrentDay] = useState(week[0]);
	const navigate = useNavigate();
	const { data, loading, error } = useQuery(WEEK_LIST, {
		variables: {
			period: period,
		},
		fetchPolicy: "no-cache",
	});
	if (loading) {
		return <Loading />;
	}
	if (error) {
		if (error.message === "not auth" || error.message === "Unauthorized") {
			navigate("/");
			toast.error(`please sign in or sign up`, {
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
		if (error.message === "Context creation failed: jwt expired") {
			localStorage.clear();
			navigate("/");
			toast.error(`please sign in or sign up`, {
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
		// return <div>{error.message}</div>;
	}
	const handleSetCurDay = (day: { day: string; key: number }) => {
		setCurrentDay(day);
	};
	return (
		<div className={styles.container}>
			{data && (
				<WeekDay
					changeMealtime={null}
					togleIsOpen={toggleIsOpen}
					weekId={data.getWeekByPeriod.id}
					day={
						data &&
						data.getWeekByPeriod.week.find(
							(item: IWeekDay) =>
								item.day.toLowerCase() === currentDay.day.toLowerCase(),
						)
					}
				/>
			)}
			<div>
				<ul className={styles.list}>
					{week.map((el) => (
						<li
							key={el.key}
							className={styles.list_item}
							onClick={() => handleSetCurDay(el)}
							style={{
								color:
									el.day.toLowerCase() === currentDay.day.toLowerCase()
										? "var(--accentColor)"
										: "var(--textColor",
							}}
						>
							{t(`MenuPage.days.${el.day.toLowerCase()}`).slice(0, 3)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
