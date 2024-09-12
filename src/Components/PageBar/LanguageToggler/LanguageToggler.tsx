import { useState } from "react";
import styles from "./LanguageToggler.module.css";
import i18next from "i18next";
import { constants } from "../../../i18n/constants";
import enFlag from "../../../../public/en.svg";
import ukFlag from "../../../../public/ukr.svg";
interface IlanguageOptions {
	value: string;
	label: any;
	isDisabled?: boolean;
}
export const LanguageToggler = () => {
	const [isOpen, setIsOpen] = useState(false);
	const langOptions: IlanguageOptions[] = [
		{
			value: constants.UK,
			label: <img width={40} height={20} src={ukFlag} alt="ek" />,
			isDisabled: i18next.language === constants.UK,
		},
		{
			value: constants.EN,
			label: <img width={40} height={20} src={enFlag} alt="en" />,
			isDisabled: i18next.language === constants.EN,
		},
	];
	const toggleIsOpen = () => {
		setIsOpen((state) => !state);
	};
	const toggleLanguage = (value: any) => {
		// setLang(value);
		// onChangeLang(value);
		i18next.changeLanguage(value);
		toggleIsOpen();
	};
	return (
		<div
			className={
				isOpen
					? `${styles.container} ${styles.container_opened}`
					: styles.container
			}
		>
			<button className={styles.btn} type="button" onClick={toggleIsOpen}>
				{langOptions.find((el) => el.value === i18next.language)?.label}
			</button>

			<div
				className={
					isOpen
						? `${styles.dropdown_container} ${styles.hidden}`
						: `${styles.dropdown_container}`
				}
			>
				{langOptions.map((el) => (
					<button
						onClick={() => toggleLanguage(el.value)}
						className={styles.btn}
					>
						{el.label}
					</button>
				))}
				{/* <button>UA</button>
					<button>EN</button> */}
			</div>
		</div>
	);
};
