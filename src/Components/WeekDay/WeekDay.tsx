import styles from "./WeekDay.module.css";
// import Select from "react-select";
import { FC } from "react";
import { IWeekDay } from "../../types/WeekDay";
// import edit from "../../../public/icon_pencil.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from "/public/icon_pencil.svg?react";
import { useTranslation } from "react-i18next";
interface IProps {
	day: IWeekDay;
	weekId: string;
	togleIsOpen: () => void;
	changeMealtime: (mealtime: string) => void;
}

export const WeekDay: FC<IProps> = ({ day, togleIsOpen, changeMealtime }) => {
	const { t } = useTranslation();
	const onEditDish = (mealtime: string) => {
		togleIsOpen();
		changeMealtime(mealtime);
	};

	const categoryColors: Record<string, string> = {
		Breakfast: "#E8E0FF",
		Lunch: "#FFEDC8 ",
		Dinner: "#CCF2FF",
	};
	return (
		<div className={styles.conteiner}>
			<div className={styles.header}>
				<p className={styles.title}>
					{t(`MenuPage.days.${day.day.toLowerCase()}`)}
				</p>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.mealtimes_conteiner}>
					<p className={styles.mealtimes}>{t(`MenuPage.mealtimes`)}:</p>
					<p
						style={{ backgroundColor: categoryColors.Breakfast }}
						className={styles.category}
					>
						{t(`Categories.breakfast`)}
					</p>
					<p className={styles.dish}>{t(`MenuPage.dish`)}:</p>
					<p>{day?.b?.name ? day.b.name : "-"}</p>
					<div
						className={styles.icon_conteiner}
						onClick={() => onEditDish("Breakfast")}
					>
						<EditSvg fill="var(--accentColor)" stroke="var(--accentColor)" />
					</div>
				</div>

				<div className={styles.mealtimes_conteiner}>
					<p className={styles.mealtimes}>{t(`MenuPage.mealtimes`)}:</p>
					<p
						style={{ backgroundColor: categoryColors.Lunch }}
						className={styles.category}
					>
						{t(`Categories.lunch`)}
					</p>
					<p className={styles.dish}>{t(`MenuPage.dish`)}:</p>
					<p>{day?.l?.name ? day.l.name : "-"}</p>
					<div
						className={styles.icon_conteiner}
						onClick={() => onEditDish("Lunch")}
					>
						<EditSvg fill="var(--accentColor)" stroke="var(--accentColor)" />
					</div>
				</div>
				<div className={styles.mealtimes_conteiner}>
					<p className={styles.mealtimes}>{t(`MenuPage.mealtimes`)}:</p>
					<p
						style={{ backgroundColor: categoryColors.Dinner }}
						className={styles.category}
					>
						{t(`Categories.dinner`)}
					</p>
					<p className={styles.dish}>{t(`MenuPage.dish`)}:</p>
					<p>{day?.d?.name ? day.d.name : "-"}</p>
					<div
						className={styles.icon_conteiner}
						onClick={() => onEditDish("Dinner")}
					>
						<EditSvg fill="var(--accentColor)" stroke="var(--accentColor)" />
					</div>
				</div>
			</div>
		</div>
	);
};
