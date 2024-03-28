import styles from "./AuthRadioButtons.module.css";
export const AuthRadioButtons = ({ changeForm }: any) => {
	const handleChangeForm = (curentForm: string) => {
		changeForm(curentForm);
	};
	return (
		<div className={styles.radio_inputs}>
			<label onClick={() => handleChangeForm("login")} className={styles.radio}>
				<input defaultChecked type="radio" name="radio" />
				<span className={styles.name}>Sign in</span>
			</label>
			<label
				onClick={() => handleChangeForm("register")}
				className={styles.radio}
			>
				<input type="radio" name="radio" />
				<span className={styles.name}>Sign up</span>
			</label>
		</div>
	);
};
