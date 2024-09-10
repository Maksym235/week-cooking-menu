import { useTranslation } from "react-i18next";
import styles from "./EmptyWeek.module.css";
export const EmptyWeek = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{t(`EmptyWeek.title`)}</h2>
			<p className={styles.text}>{t(`EmptyWeek.dontHaveList`)}</p>
			<p className={styles.text}>{t(`EmptyWeek.doWantCreate`)}</p>
			<button className={styles.btn}>{t(`EmptyWeek.create`)}</button>
		</div>
	);
};
