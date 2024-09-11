import styles from "./WeekMenu.module.css";
import { WeekList } from "../../Components/WeekList/WeekList.tsx";
import { PageBar } from "../../Components/PageBar/PageBar.tsx";
import { useTranslation } from "react-i18next";
const WeekMenu = () => {
	const { t } = useTranslation();
	return (
		<main className={styles.container}>
			<PageBar title={t(`Header.menu`)} />
			<WeekList />
		</main>
	);
};
export default WeekMenu;
