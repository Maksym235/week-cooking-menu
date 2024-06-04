import { FC, useState } from "react";
import styles from "./EditDishIngredients.module.css";
// import { useForm } from "react-hook-form";
import { IIngredients } from "../../../types/ingredients";
import { FaRegTrashAlt } from "react-icons/fa";
import Select from "react-select";
import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { errorOptions } from "../../../utils/toastOptions";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from "/public/icon_pencil.svg?react";

interface IProps {
	toggleIsOpen: () => void;
	ings: Record<string, Record<string, Array<IIngredients>>>;
}
interface IItemProps {
	name: string;
}
// ================================================
// 		GET INGREDIENTS FOR SELECT AND CREATE ITEM FOR LIST
const GET_ALL_INGREDIENTS = gql`
	query Query {
		getIngredients {
			id
			name
			defaultValue
			category
			description
		}
	}
`;

export const SelectIngredientItem: FC<IItemProps> = ({ name }) => {
	return (
		<div>
			<p>{name}</p>
		</div>
	);
};

//================================================
// 			EDIT DISH INGREDIENTS
export const EditDishIngredients: FC<IProps> = ({ ings }) => {
	const { data, loading, error } = useQuery(GET_ALL_INGREDIENTS);
	const [ingsData, setIngsData] = useState(ings.getDishById.ingredients);
	const [selectedIng, setSelectedIng] = useState<any | null>(null);
	const navigate = useNavigate();
	// const onAddOne = () => {
	// 	const defaultIng = {
	// 		name: "",
	// 		defaultValue: 0,
	// 		category: "",
	// 	};
	// 	setIngsData((state) => [...state, defaultIng]);
	// };
	const weightsType = [
		{ label: "грам", value: "грам" },
		{ label: "шт", value: "шт" },
		{ label: "мл", value: "мл" },
		{ label: "дрібка", value: "дрібка" },
		{ label: "стакан", value: "стакан" },
		{ label: "ст.л", value: "ст.л" },
		{ label: "ч.л", value: "ч.л" },
	];
	const handleSelectIng = (value: any) => {
		setSelectedIng(value);
	};
	const allIngsList = data
		? data.getIngredients.map((el: IIngredients) => {
				return {
					value: el,
					label: <SelectIngredientItem name={el.name} />,
				};
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  })
		: [];
	// const onSubmit = (data: any) => {
	// 	console.log(data);
	// };
	const onDelete = (name: string) => {
		const filteredData = ingsData.filter((ing) => ing.name !== name);
		setIngsData(filteredData);
	};
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		if (error.message === "not auth") {
			navigate("/");
			toast.error(`please sign in or sign up`, errorOptions);
		}
		if (error.message === "Context creation failed: jwt expired") {
			localStorage.clear();
			navigate("/");
			toast.error(`please sign in or sign up`, errorOptions);
		}
		return <div>{error.message}</div>;
	}

	return (
		<div className={styles.main_container}>
			<div>
				<p>Інгредієнти в страві</p>
				<ul className={styles.form_list}>
					{ingsData &&
						ingsData.map((item) => (
							<li className={styles.form_list_item}>
								<div>
									<p>{item.name}</p>
									{/* <p>{item.defaultValue}</p> */}
								</div>
								<div className={styles.icons_container}>
									<EditSvg
										className={styles.icon}
										fill={data ? "var(--accentColor)" : "var(--silverColor)"}
										stroke={data ? "var(--accentColor)" : "var(--silverColor)"}
									/>
									<FaRegTrashAlt
										onClick={() => onDelete(item.name)}
										className={styles.icon}
										color="var(--accentColor)"
									/>
								</div>

								{/* <label className={styles.label}>
								Name
								<input
									className={styles.input}
									placeholder={item.name}
									{...register("name")}
								/>
								</label>
								<label className={styles.label}>
								Default value
								<input
								className={styles.input}
								placeholder={String(item.defaultValue)}
								type="number"
								{...register("defaultValue")}
								/>
								</label>
								<label className={styles.label}>
								Category
								<input
								className={styles.input}
								placeholder={item.category}
								{...register("category")}
								/>
							</label> */}
							</li>
						))}
				</ul>
			</div>
			<div className={styles.new_ings_container}>
				<p>Всі інгредієнти</p>
				<Select
					className={styles.select_ings}
					onChange={(evt: any) => handleSelectIng(evt.value)}
					options={allIngsList}
				/>
				{selectedIng && (
					<>
						<div className={styles.new_ing_details}>
							<input
								placeholder={selectedIng.defaultValue}
								className={styles.new_ing_count}
							/>
							<Select
								className={styles.select_weight_type}
								options={weightsType}
								defaultValue={weightsType[0]}
							/>
						</div>
						<button className={styles.btn_add}>Add</button>
					</>
				)}
			</div>
		</div>
	);
};
