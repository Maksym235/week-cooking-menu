import { useState } from "react";
import { week } from "../../WeekList/WeekList.tsx";
import styles from "./CreateNewWeekList.module.css";
import Select from "react-select";
import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import loading = toast.loading;
import { createLogger } from "vite";
import { NewWeekDay } from "./NewWeekDay.tsx";
import { Slider, SliderComponent } from "./Slieder/Slider.tsx";

const GET_DISHES = gql`
	query Query {
		getDishes {
			id
			name
			category
		}
	}
`;
export const CreateNewWeekList = ({
	toggleIsOpen,
}: {
	toggleIsOpen: () => void;
}) => {
	const { data, loading, error } = useQuery(GET_DISHES);
	const [currentDay, setCurrentDay] = useState("Monday");
	const [lunch, setLunch] = useState<any>(null);
	const [days, setDays] = useState<any>([]);
	const categoryColors: Record<string, string> = {
		Breakfast: "#E8E0FF",
		Lunch: "#FFEDC8",
		Dinner: "#CCF2FF",
	};
	const colourOptions = [
		{ value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
		{ value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
		{ value: "purple", label: "Purple", color: "#5243AA" },
		{ value: "red", label: "Red", color: "#FF5630", isFixed: true },
		{ value: "orange", label: "Orange", color: "#FF8B00" },
		{ value: "yellow", label: "Yellow", color: "#FFC400" },
		{ value: "green", label: "Green", color: "#36B37E" },
		{ value: "forest", label: "Forest", color: "#00875A" },
		{ value: "slate", label: "Slate", color: "#253858" },
		{ value: "silver", label: "Silver", color: "#666666" },
	];
	if (loading) {
		return <div>Loading...</div>;
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

	const onChangeMonday = (evt: any) => {
		setLunch(evt);
	};

	const breakfastDishes = data.getDishes
		.filter((item: any) => item.category.includes("Breakfast"))
		.map((item: any) => {
			return {
				value: item.id,
				label: item.name,
			};
		});
	const lunchDishes = data.getDishes
		.filter((item: any) => item.category.includes("Lunch"))
		.map((item: any) => {
			return {
				value: item.id,
				label: item.name,
			};
		});
	const dinerDishes = data.getDishes
		.filter((item: any) => item.category.includes("Dinner"))
		.map((item: any) => {
			return {
				value: item.id,
				label: item.name,
			};
		});

	const onHandleSetDay = (day: any) => {
		setDays((state: any) => [...state, day]);
	};
	const onHandleSubmit = () => {
		console.log(days);
	};
	return (
		<>
			<div>
				<SliderComponent
					data={week}
					day={currentDay}
					breakfastDishes={breakfastDishes}
					lunchDishes={lunchDishes}
					dinnerDishes={dinerDishes}
				/>
				{/* <ul className={styles.days_list}>
					{week.map((item) => (
						<li
							className={
								currentDay === item.day
									? `${styles.days_list_item} ${styles.active}`
									: `${styles.days_list_item}`
							}
							onClick={() => setCurrentDay(item.day)}
						>
							{item.day.slice(0, 3)}
						</li>
					))}
				</ul> */}

				{/* {currentDay === "Monday" && (
					<NewWeekDay
						day={currentDay}
						breakfastDishes={breakfastDishes}
						lunchDishes={lunchDishes}
						dinnerDishes={dinerDishes}
					/>
				)}
				{currentDay === "Tuesday" && (
					<NewWeekDay
						day={currentDay}
						breakfastDishes={breakfastDishes}
						lunchDishes={lunchDishes}
						dinnerDishes={dinerDishes}
					/>
				)} */}
				<button onClick={onHandleSubmit}>Save</button>
			</div>
		</>
	);
};
