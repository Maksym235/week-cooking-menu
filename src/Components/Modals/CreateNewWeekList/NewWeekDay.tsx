import styles from "./CreateNewWeekList.module.css";
import Select from "react-select";
import { useState } from "react";
import { week } from "../../../WeekList/WeekList.tsx";
interface IMealtimesDishes {
	breakfastDishes: [Record<string, string>];
	lunchDishes: [Record<string, string>];
	dinnerDishes: [Record<string, string>];
	day: string;
}
export const NewWeekDay = ({
	breakfastDishes,
	lunchDishes,
	dinnerDishes,
	day,
}: IMealtimesDishes) => {
	const [breakfast, setBreackfast] = useState<any>([]);
	const [lunch, setLunch] = useState([]);
	const [dinner, setDinner] = useState([]);
	const categoryColors: Record<string, string> = {
		Breakfast: "#E8E0FF",
		Lunch: "#FFEDC8 ",
		Dinner: "#CCF2FF",
	};
	const onChangeBreakfast = (evt: any) => {
		console.log(evt);
		setBreackfast(evt);
	};
	const onChangeLunch = (evt: any) => {
		setLunch(evt);
	};

	const onChangeDinner = (evt: any) => {
		setDinner(evt);
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
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.mealtimes_conteiner}>
					<p className={styles.mealtimes}>Mealtimes:</p>
					<p
						style={{ backgroundColor: categoryColors.Breakfast }}
						className={styles.category}
					>
						Breakfast
					</p>
					<p className={styles.dish}>Dish:</p>
					<Select
						isMulti
						defaultValue={breakfast}
						onChange={onChangeBreakfast}
						name="colors"
						options={colourOptions}
					/>
					{/* <Select
            defaultValue={options[0]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
					{/* <p>{breakfast ? breakfast: ''}</p> */}
				</div>
				<div className={styles.mealtimes_conteiner}>
					<p className={styles.mealtimes}>Mealtimes:</p>
					<p
						style={{ backgroundColor: categoryColors.Lunch }}
						className={styles.category}
					>
						Lunch
					</p>
					<p className={styles.dish}>Dish:</p>
					<Select
						isMulti
						defaultValue={lunchDishes}
						onChange={onChangeLunch}
						name="colors"
						options={lunchDishes}
					/>
					{/* <Select
            defaultValue={options[1]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
					{/* <p>{lunch ? lunch: ''}</p> */}
				</div>
				<div className={styles.mealtimes_conteiner}>
					<p className={styles.mealtimes}>Mealtimes:</p>
					<p
						style={{ backgroundColor: categoryColors.Dinner }}
						className={styles.category}
					>
						Dinner
					</p>
					<p className={styles.dish}>Dish:</p>
					<Select
						isMulti
						onChange={onChangeDinner}
						name="colors"
						options={dinnerDishes}
					/>
					{/* <Select
            defaultValue={options[2]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
					{/* <p>{dinner ? dinner: ''}</p> */}
				</div>
			</div>
		</>
	);
};
