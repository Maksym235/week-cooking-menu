import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import styles from "./EditDishInfo.module.css";
export const EditDishInfo = ({
	toggleIsOpen,
}: {
	toggleIsOpen: () => void;
}) => {
	const options = [
		{ value: "Dinner", label: "Dinner", isFixed: true },
		{ value: "Lunch", label: "Lunch" },
		{ value: "Breakfast", label: "Breakfast" },
	];
	const { control, handleSubmit } = useForm({
		defaultValues: {
			name: "",
			category: [],
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);
		const formedCategory = data.category.map((item: any) => item.value);
		console.log(formedCategory);
		toggleIsOpen();
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<input placeholder="Dish name" className={styles.input} {...field} />
				)}
			/>
			<Controller
				name="category"
				control={control}
				render={({ field }) => (
					<Select
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
			<input className={styles.btn} type="submit" />
		</form>
	);
};
