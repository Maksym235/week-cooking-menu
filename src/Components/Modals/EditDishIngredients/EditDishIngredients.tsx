import { FC, useState } from "react";
import styles from "./EditDishIngredients.module.css";
import { useForm } from "react-hook-form";
import { IIngredients } from "../../../types/ingredients";
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
import Select from "react-select";
import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { errorOptions } from "../../../utils/toastOptions";
interface IProps {
	toggleIsOpen: () => void;
	ings: Record<string, Record<string, Array<IIngredients>>>;
}
interface IItemProps {
	name: string;
	value: number | undefined;
	category: string;
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

export const SelectIngredientItem: FC<IItemProps> = ({
	name,
	value,
	category,
}) => {
	return (
		<div>
			<div>
				<p>{name}</p>
				<p>{value}</p>
				<p>{category}</p>
			</div>
			<FaPlus color="var(--accentColor)" />
		</div>
	);
};

//================================================
// 			EDIT DISH INGREDIENTS
export const EditDishIngredients: FC<IProps> = ({ ings }) => {
	const { data, loading, error } = useQuery(GET_ALL_INGREDIENTS);
	const [ingsData, setIngsData] = useState(ings.getDishById.ingredients);
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	console.log(register);
	// const onAddOne = () => {
	// 	const defaultIng = {
	// 		name: "",
	// 		defaultValue: 0,
	// 		category: "",
	// 	};
	// 	setIngsData((state) => [...state, defaultIng]);
	// };
	const allIngsList = data
		? data.getIngredients.map((el: IIngredients) => {
				return {
					value: el.name,
					label: (
						<SelectIngredientItem
							name={el.name}
							value={el.defaultValue}
							category={el.category}
						/>
					),
				};
		  })
		: [];
	const onSubmit = (data: any) => {
		console.log(data);
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
		<form
			className={styles.form}
			onSubmit={handleSubmit((data) => onSubmit(data))}
		>
			<div>
				<p>Всі інгредієнти</p>
				<Select options={allIngsList} />
			</div>
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

								<FaRegTrashAlt
									className={styles.delete_icon}
									color="var(--accentColor)"
								/>

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
			{/* <button onClick={onAddOne} className={styles.btn}>
				add one
			</button> */}
			{/* <input {...register("firstName")} placeholder="First name" /> */}
			<input className={styles.btn} type="submit" />
		</form>
	);
};
