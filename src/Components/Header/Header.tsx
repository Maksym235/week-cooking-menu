import * as dayjs from "dayjs";
import styles from "./Header.module.css";
import Select from "react-select";
export const Header = ({ title }: any) => {
	const langOptions = [
		{ value: "", label: "Ukraine" },
		{ value: "", label: "English" },
	];
	const themeOptions = [
		{ value: "light", label: "Light" },
		{ value: "dark", label: "dark" },
	];
	const date = dayjs().format("DD.MM.YYYY");

	return (
		<header className={styles.header}>
			<div className={styles.conteiner}>
				<div className={styles.header_date}>
					<p>{date}</p>
				</div>
				<div>
					<p>{title}</p>
				</div>
				<div className={styles.select_options}>
					<Select options={themeOptions} />
					<Select options={langOptions} />
				</div>
			</div>
		</header>
	);
};
