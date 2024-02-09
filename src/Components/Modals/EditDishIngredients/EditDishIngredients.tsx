import { FC, useState } from "react";
import styles from "./EditDishIngredients.module.css";
import { useForm } from "react-hook-form";
import { IIngredients } from "../../../types/ingredients";
interface IProps {
	toggleIsOpen: () => void;
	ings: Record<string, Record<string, Array<IIngredients>>>;
}
export const EditDishIngredients: FC<IProps> = ({ ings }) => {
	const [ingsData, setIngsData] = useState(ings.getDishById.ingredients);
	const { register, handleSubmit } = useForm();
	console.log(ingsData);
	const onAddOne = () => {
		const defaultIng = {
			name: "",
			defaultValue: 0,
			category: "",
		};
		setIngsData((state) => [...state, defaultIng]);
	};
	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit((data) => onSubmit(data))}
		>
			<ul className={styles.form_list}>
				{ingsData &&
					ingsData.map((item) => (
						<li className={styles.form_list_item}>
							<label className={styles.label}>
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
							</label>
						</li>
					))}
			</ul>
			<button onClick={onAddOne} className={styles.btn}>
				add one
			</button>
			{/* <input {...register("firstName")} placeholder="First name" /> */}
			<input className={styles.btn} type="submit" />
		</form>
	);
};
