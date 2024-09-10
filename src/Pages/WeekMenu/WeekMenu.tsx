import styles from "./WeekMenu.module.css";
import { WeekList } from "../../Components/WeekList/WeekList.tsx";
import { PageBar } from "../../Components/PageBar/PageBar.tsx";
import { useTranslation } from "react-i18next";
import { EmptyWeek } from "../../Components/EmptyWeek/EmptyWeek.tsx";
const WeekMenu = () => {
	const { t } = useTranslation();
	return (
		<main className={styles.container}>
			<PageBar title={t(`Header.menu`)} />
			<WeekList />
			{/* <EmptyWeek /> */}
		</main>
	);
};
export default WeekMenu;
