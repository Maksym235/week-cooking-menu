import styles from "./AddIngredientModal.module.css";
import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ADD_INGREDIENT = gql`
	mutation CreateIngredient(
		$name: String!
		$category: String
		$weightType: String
		$defaultValue: Int
		$description: String
	) {
		createIngredient(
			name: $name
			category: $category
			defaultValue: $defaultValue
			weightType: $weightType
			description: $description
		) {
			id
			category
			defaultValue
			name
			description
		}
	}
`;

export const AddIngredientModal = ({ toggleIsOpen, refetchData }: any) => {
	const { t } = useTranslation();
	const [createIngredient, { data, loading, error }] =
		useMutation(ADD_INGREDIENT);
	const { register, handleSubmit } = useForm();
	const submitForm = (data: any) => {
		createIngredient({
			variables: {
				name: data.name,
				category: data.category ? data.category : "",
				defaultValue: data.defaultValue ? Number(data.defaultValue) : "",
				description: data.description ? data.description : "",
				weightType: "грам",
			},
		});
	};
	if (data) {
		toggleIsOpen();
		refetchData();
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
				{t(`Modals.AddIngredient.name`)}
				<input
					className={styles.input}
					{...register("name")}
					placeholder={t(`Modals.AddIngredient.name`)}
				/>
			</label>
			<label className={styles.label}>
				{t(`Modals.AddIngredient.category`)}
				<input
					className={styles.input}
					{...register("category")}
					placeholder={t(`Modals.AddIngredient.category`)}
				/>
			</label>
			<label className={styles.label}>
				{t(`Modals.AddIngredient.defaultValue`)}
				<input
					className={styles.input}
					type="number"
					{...register("defaultValue")}
					placeholder={t(`Modals.AddIngredient.defaultValue`)}
				/>
			</label>
			<label className={styles.label}>
				{t(`Modals.AddIngredient.desc`)}
				<input
					className={styles.input}
					{...register("description")}
					placeholder={t(`Modals.AddIngredient.desc`)}
				/>
			</label>
			<p>{data}</p>
			<input className={styles.submit_btn} type="submit" />
		</form>
	);
};
