import styles from "./AddDish.module.css";
import { useMutation, gql } from "@apollo/client";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
interface IPropsDishModal {
	toggleIsOpen: () => void;
}
const ADD_DISH = gql`
	mutation Mutation(
		$name: String!
		$category: [String!]
		$description: String
		$ingredients: [IngredientInDish]!
	) {
		addDish(
			name: $name
			category: $category
			description: $description
			ingredients: $ingredients
		) {
			id
			name
			category
			description
		}
	}
`;
const AddDishModal: React.FC<IPropsDishModal> = ({ toggleIsOpen }) => {
	const [addDish, { data, loading, error }] = useMutation(ADD_DISH);
	// const { register, handleSubmit } = useForm();
	const { control, handleSubmit } = useForm();
	const options = [
		{ value: "Dinner", label: "Dinner" },
		{ value: "Lunch", label: "Lunch" },
		{ value: "Breakfast", label: "Breakfast" },
	];
	const submitForm = (data: any) => {
		addDish({
			variables: {
				name: data.name,
				category: data.category,
				description: data.description,
				ingredients: [
					{
						name: "test",
						category: "",
						defaultValue: 10,
						description: "",
					},
				],
			},
		});
	};
	if (data) {
		toggleIsOpen();
	}
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit((data) => submitForm(data))}
		>
			<label className={styles.label}>
				Name
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<input placeholder="name" className={styles.input} {...field} />
					)}
				/>
				{/* <input
					className={styles.input}
					{...register("name")}
					placeholder="name"
				/> */}
			</label>
			<label className={styles.label}>
				Category
				<Controller
					name="category"
					control={control}
					render={({ field }) => (
						<Select
							// className={styles.select}
							{...field}
							defaultValue={[options[1], options[2]]}
							isMulti
							name="colors"
							options={options}
							className="basic-multi-select"
							classNamePrefix="select"
						/>
					)}
				/>
				{/* <select className={styles.select} {...register("category")}>
					<option value="Breakfast">breakfast</option>
					<option value="Lunch">lunch</option>
					<option value="Dinner">dinner</option>
				</select> */}
			</label>
			<label className={styles.label}>
				Description
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<input
							placeholder="description"
							className={styles.input}
							{...field}
						/>
					)}
				/>
				{/* <input
					className={styles.input}
					{...register("description")}
					placeholder="description"
				/> */}
			</label>
			<input className={styles.submit_btn} type="submit" />
		</form>
	);
};

export default AddDishModal;
