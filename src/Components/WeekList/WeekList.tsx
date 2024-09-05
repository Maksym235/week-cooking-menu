import styles from "./WeekList.module.css";
import { WeekDay } from "../WeekDay/WeekDay.tsx";

import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IWeekDay } from "../../types/WeekDay.ts";
import { WeekDaysSideBar } from "../WeekDaysSideBar/WeekDaysSideBar.tsx";
import { WeekSettingsBlock } from "../WeekSettingsBlock/WeekSettingsBlock.tsx";
import { ModalConteiner } from "../ModalConteiner/ModalContainer.tsx";
import dayjs from "dayjs";
import { SetToDayNewDish } from "../Modals/SetToDayNewDish/SetToDayNewDish.tsx";
import { week } from "./week.ts";
import { Loading } from "../Loading/Loading.tsx";
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

export const WeekList = () => {
	const [currentDay, setCurrentDay] = useState(week[0]);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [editedMealtime, setEditedMealtime] = useState("");
	const navigate = useNavigate();
	dayjs().locale("uk-ua");
	const currentWeekMonday = dayjs().day(1).format("YYYY-MM-DD");
	const { data, loading, error, refetch } = useQuery(WEEK_LIST, {
		variables: {
			period: currentWeekMonday,
		},
		fetchPolicy: "no-cache",
	});
	const handleSetCurrentDay = (day: { day: string; key: number }) => {
		setCurrentDay(day);
	};
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
		return <div>{error.message}</div>;
	}
	const toggleCreateMenuModal = () => {
		setIsOpenModal((state) => !state);
	};

	const changeMealtime = (mealtime: string) => {
		setEditedMealtime(mealtime);
	};
	return (
		<section className={styles.conteiner}>
			<WeekDaysSideBar
				curDayKey={currentDay.key}
				week={week}
				handleSetCurrentDay={handleSetCurrentDay}
			/>
			{week && (
				<WeekDay
					changeMealtime={changeMealtime}
					togleIsOpen={toggleCreateMenuModal}
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
			<WeekSettingsBlock
				periods={{
					period1: data.getWeekByPeriod.period1,
					period2: data.getWeekByPeriod.period2,
				}}
				weekId={data.getWeekByPeriod.id}
				openModal={toggleCreateMenuModal}
				refetchData={refetch}
			/>
			{/* <ul className={styles.list}>
        {week.map((item: { day: string; key: number }) => (
          <li key={item.key}>
            <WeekDay color={getRandomColor()} title={item.day} />
          </li>
        ))}
      </ul> */}
			<ModalConteiner
				toggleIsOpen={toggleCreateMenuModal}
				isOpen={isOpenModal}
				children={
					<SetToDayNewDish
						weekId={data.getWeekByPeriod.id}
						currentDay={currentDay}
						dayData={data.getWeekByPeriod.week.find(
							(item: IWeekDay) =>
								item.day.toLowerCase() === currentDay.day.toLowerCase(),
						)}
						refetchData={refetch}
						mealtime={editedMealtime}
						toggleIsOpen={toggleCreateMenuModal}
					/>
				}
			/>
		</section>
	);
};
