import styles from "./WellcomeMessage.module.css";
import { useTranslation } from "react-i18next";
export const WellcomeMessage = () => {
	const { t } = useTranslation();
	const user = JSON.parse(localStorage.getItem("user")!);
	return (
		<div className={styles.container}>
			<h2>{t(`Wellcome.wellcome`)},</h2>
			<p>{user.name}</p>
		</div>
	);
};
