import { HomeNavigationMenu } from "../../Components/HomeNavigationMenu/HomeNavigationMenu.tsx";
// import CookImg from '../../assets/cookImg.png'
import { PageBar } from "../../Components/PageBar/PageBar.tsx";
import styles from "./Home.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
// import weekday from "dayjs/plugin/weekday.d.ts";
const Home = () => {
	const { t } = useTranslation();
	const [state, setState] = useState<any>([
		{
			startDate: dayjs().startOf("week").toDate(),
			endDate: dayjs().endOf("week").toDate(),
			key: "selection",
		},
	]);
	return (
		<main className={styles.conteiner}>
			<PageBar title={t(`Header.home`)} />
			{/*<h1>Welcome</h1>*/}
			{/*<img width={350} height={300} src={CookImg} alt='titlePhoto'/>*/}
			<div className={styles.wrapper}>
				<HomeNavigationMenu />
				<DateRange
					className={styles.calendar}
					editableDateInputs={false}
					onChange={(item) => setState([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={state}
				/>
			</div>
		</main>
	);
};

export default Home;
