import { FC, useState } from "react";
import styles from "./EditDishIngredients.module.css";
// import { useForm } from "react-hook-form";
import { IIngredients } from "../../../types/ingredients";
import { FaRegTrashAlt } from "react-icons/fa";
import Select from "react-select";
import { useQuery, gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { errorOptions } from "../../../utils/toastOptions";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from "/public/icon_pencil.svg?react";
import { Loading } from "../../Loading/Loading";

interface IProps {
	refetchData: any;
	toggleIsOpen: () => void;
	dishId: string;
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

const UPDATE_DISH = gql`
	mutation Mutation($updateDishId: ID!, $ingredients: [IngredientInDish]) {
		updateDish(id: $updateDishId, ingredients: $ingredients) {
			name
			ingredients {
				weightType
				count
				weightInGrams
				owner
				name
				id
				description
				defaultValue
				category
			}
			id
			description
			category
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
export const EditDishIngredients: FC<IProps> = ({
	ings,
	dishId,
	toggleIsOpen,
	refetchData,
}) => {
	const { data, loading, error } = useQuery(GET_ALL_INGREDIENTS);
	const [
		updateDish,
		{ data: mutationData, loading: mutationLoading, error: mutationError },
	] = useMutation(UPDATE_DISH);
	const [ingsData, setIngsData] = useState<any>(ings.getDishById.ingredients);
	const [selectedIng, setSelectedIng] = useState<any | null>(null);
	const [selectedIngCount, setSelectedIngCount] = useState<number>(0);
	const [selectedIngWgType, setSelectedIngWgType] = useState<
		string | undefined
	>("шрам");
	const [editedIng, setEditedIng] = useState<any | null>(null);
	const [editedIngCount, setEditedIngCount] = useState(0);
	const [editedIngWgType, setEditedIngWgType] = useState<string | undefined>(
		"",
	);
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
				// if ()
				return {
					value: el,
					label: <SelectIngredientItem name={el.name} />,
				};
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  })
		: [];

	const onClickEdit = (value: string) => {
		if (editedIng === value) {
			setEditedIng("");
			return;
		}

		setEditedIng(value);
	};
	const onDelete = (name: string) => {
		const filteredData = ingsData.filter(
			(ing: IIngredients) => ing.name !== name,
		);
		setIngsData(filteredData);
	};

	const onAddNewIng = () => {
		const newIng = {
			id: selectedIng.id,
			name: selectedIng.name,
			category: selectedIng.category,
			defaultValue: selectedIng.defaultValue,
			count: selectedIngCount,
			weightType: selectedIngWgType,
		};
		setIngsData((state: IIngredients[]) => [...state, newIng]);
		setSelectedIng(null);
		setSelectedIngCount(0);
		setSelectedIngWgType("");
	};

	const onSaveEdit = () => {
		const editedIngData = ingsData.find(
			(el: IIngredients) => el.name === editedIng,
		);

		const updatedIng = {
			id: editedIngData.id,
			name: editedIngData.name,
			category: editedIngData.category,
			defaultValue: editedIngData.defaultValue,
			count: editedIngCount ? editedIngCount : editedIngData.count,
			weightsType: editedIngWgType
				? editedIngWgType
				: editedIngData.weightsType,
		};

		const filterdData = ingsData.filter(
			(el: IIngredients) => el.name !== editedIng,
		);
		setIngsData([...filterdData, updatedIng]);
		setEditedIng(null);
		setEditedIngCount(0);
		setEditedIngWgType("");
	};
	const onSubmit = async () => {
		const mutationData = {
			updateDishId: dishId,
			ingredients: ingsData,
		};

		await updateDish({
			variables: mutationData,
		});
		await refetchData();

		toggleIsOpen();
	};
	if (loading || mutationLoading) {
		return <Loading />;
	}
	if (error || mutationError) {
		if (
			error?.message === "not auth" ||
			mutationError?.message === "not auth"
		) {
			navigate("/");
			toast.error(`please sigon in or sign up`, errorOptions);
		}
		if (
			error?.message === "Context creatin failed: jwt expired" ||
			mutationError?.message === "Context creatin failed: jwt expired"
		) {
			localStorage.clear();
			navigate("/");
			toast.error(`please sign in or sign up`, errorOptions);
		}
		return <div>{error?.message || mutationError?.message}</div>;
	}

	if (mutationData) {
		toast.success(`update success`);
	}

	return (
		<>
			<div className={styles.main_container}>
				<div>
					<p className={styles.title}>Інгредієнти в страві</p>
					<ul className={styles.form_list}>
						{ingsData &&
							ingsData.map((item: IIngredients) => (
								<li>
									<div className={styles.form_list_item}>
										<div>
											<p>{item.name}</p>
											{/* <p>{item.defaultValue}</p> */}
										</div>
										<div className={styles.icons_container}>
											<EditSvg
												onClick={() => onClickEdit(item.name)}
												className={styles.icon}
												fill={
													data ? "var(--accentColor)" : "var(--silverColor)"
												}
												stroke={
													data ? "var(--accentColor)" : "var(--silverColor)"
												}
											/>
											<FaRegTrashAlt
												onClick={() => onDelete(item.name)}
												className={styles.icon}
												color="var(--accentColor)"
											/>
										</div>
									</div>
									<div
										className={
											editedIng === item.name
												? `${styles.new_ing_details}`
												: `${styles.new_ing_details} ${styles.hidden}`
										}
									>
										<input
											type="number"
											onChange={(evt) =>
												setEditedIngCount(Number(evt.target.value))
											}
											placeholder={String(
												ingsData.find(
													(el: IIngredients) => el.name === editedIng,
												)?.count,
											)}
											className={styles.new_ing_count}
										/>
										<Select
											onChange={(obj) => setEditedIngWgType(obj?.value)}
											className={styles.select_weight_type}
											options={weightsType}
											// defaultValue={weightsType[0]}
										/>
									</div>
									<button
										className={
											editedIng === item.name
												? `${styles.btn_add}`
												: `${styles.btn_add} ${styles.hidden}`
										}
										onClick={onSaveEdit}
									>
										Save
									</button>
								</li>
							))}
					</ul>
				</div>
				<div className={styles.new_ings_container}>
					<p className={styles.add_ing_title}>Додати інгредієнт</p>
					<Select
						className={styles.select_ings}
						onChange={(evt: any) => handleSelectIng(evt.value)}
						options={allIngsList}
					/>
					<>
						<div
							className={
								selectedIng
									? `${styles.new_ing_details}`
									: `${styles.new_ing_details} ${styles.hidden}`
							}
						>
							<input
								type="number"
								onChange={(evt) =>
									setSelectedIngCount(Number(evt.target.value))
								}
								placeholder={selectedIng ? selectedIng.defaultValue : 0}
								className={styles.new_ing_count}
							/>
							<Select
								onChange={(obj) => setSelectedIngWgType(obj?.value)}
								className={styles.select_weight_type}
								options={weightsType}
								defaultValue={weightsType[0]}
							/>
						</div>
						<button
							className={
								selectedIng
									? `${styles.btn_add}`
									: `${styles.btn_add} ${styles.hidden}`
							}
							onClick={onAddNewIng}
						>
							Add
						</button>
					</>
				</div>
			</div>
			<button onClick={onSubmit} className={styles.btn_add}>
				Зберегти
			</button>
		</>
	);
};
