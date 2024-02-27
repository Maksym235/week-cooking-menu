// import React from "react";
import styles from "./SettingsBlock.module.css";
import { useForm } from "react-hook-form";
export const SettingsBlock = () => {
	const { register, handleSubmit } = useForm();
	const submitForm = (data: any) => {};
	return (
		<div className={styles.setting_block}>
			<div className={styles.setting_img}></div>
			<form
				className={styles.setting_form}
				onSubmit={handleSubmit((data) => submitForm(data))}
			>
				<label className={styles.label}>
					Name
					<input
						className={styles.input}
						{...register("name")}
						placeholder="name"
					/>
				</label>
				<label className={styles.label}>
					Email
					<input
						className={styles.input}
						{...register("email")}
						placeholder="email"
					/>
				</label>
				<label className={styles.label}>
					Password
					<input
						className={styles.input}
						{...register("password")}
						placeholder="password"
					/>
				</label>
				<input className={styles.submit_btn} type="submit" />
			</form>
		</div>
	);
};
