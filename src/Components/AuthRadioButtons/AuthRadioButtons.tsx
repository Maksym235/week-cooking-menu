import styles from "./AuthRadioButtons.module.css";
import { useTranslation } from "react-i18next";

export const AuthRadioButtons = ({ changeForm }: any) => {
	const { t } = useTranslation();
	const handleChangeForm = (curentForm: string) => {
		changeForm(curentForm);
	};
	return (
		<div className={styles.radio_inputs}>
			<label onClick={() => handleChangeForm("login")} className={styles.radio}>
				<input defaultChecked type="radio" name="radio" />
				<span className={styles.name}>{t(`Auth.SignIn`)}</span>
			</label>
			<label
				onClick={() => handleChangeForm("register")}
				className={styles.radio}
			>
				<input type="radio" name="radio" />
				<span className={styles.name}>{t(`Auth.SignUp`)}</span>
			</label>
		</div>
	);
};
