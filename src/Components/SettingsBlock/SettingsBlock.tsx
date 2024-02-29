// import React from "react";
import { useState } from "react";
import styles from "./SettingsBlock.module.css";
import { useForm } from "react-hook-form";
// import arowRight from "../../../public/arow-right.svg";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from "/public/icon_pencil.svg?react";
// import arowRight from "../../../public/arow-right.svg";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import CrossSvg from "/public/cross.svg?react";
export const SettingsBlock = () => {
	const [isEdit, setIsEdit] = useState(false);
	const user = JSON.parse(localStorage.getItem("user")!);
	const { register, handleSubmit } = useForm();
	const submitForm = (data: any) => {
		console.log(data);
	};

	const handleSetIsEdit = () => {
		setIsEdit((state) => !state);
	};
	return (
		<div className={styles.setting_block}>
			<div className={styles.image_wrapper}>
				<div className={styles.setting_img}></div>
				<button
					onClick={handleSetIsEdit}
					className={
						!isEdit
							? `${styles.eddit_btn}`
							: `${styles.eddit_btn} ${styles.isEdit_btn}`
					}
				>
					Edit{" "}
					{!isEdit ? (
						<EditSvg fill="#000" />
					) : (
						<CrossSvg stroke="#var(--accentColor)" fill="var(--accentColor)" />
					)}
				</button>
			</div>
			<form
				className={styles.setting_form}
				onSubmit={handleSubmit((data) => submitForm(data))}
			>
				<label className={styles.label}>
					Name
					<input
						disabled={!isEdit}
						type="text"
						defaultValue={user.name}
						className={
							!isEdit ? `${styles.input}` : `${styles.input} ${styles.isEdit}`
						}
						{...register("name")}
						placeholder="name"
					/>
				</label>
				<label className={styles.label}>
					Email
					<input
						disabled={!isEdit}
						type="email"
						defaultValue={user.email}
						className={
							!isEdit ? `${styles.input}` : `${styles.input} ${styles.isEdit}`
						}
						{...register("email")}
						placeholder="email"
					/>
				</label>
				<label className={styles.label}>
					Password
					<input
						disabled={!isEdit}
						min="6"
						type="password"
						className={
							!isEdit ? `${styles.input}` : `${styles.input} ${styles.isEdit}`
						}
						{...register("password", { min: 8, max: 99 })}
						placeholder="password"
					/>
				</label>
				<label className={styles.label}>
					New password
					<input
						disabled={!isEdit}
						min="6"
						type="password"
						className={
							!isEdit ? `${styles.input}` : `${styles.input} ${styles.isEdit}`
						}
						{...register("NewPassword", { min: 8, max: 99 })}
						placeholder="new password"
					/>
				</label>
				<input
					disabled={!isEdit}
					className={
						!isEdit
							? `${styles.submit_btn}`
							: `${styles.submit_btn} ${styles.isEdit_btn}`
					}
					type="submit"
				/>
			</form>
		</div>
	);
};
