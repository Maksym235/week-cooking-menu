import styles from './PageBar.module.css';
// import Select from "react-select";
// import i18next from "i18next";
// import { constants } from "../../i18n/constants";
// import enFlag from "../../../public/en.svg";
// import ukFlag from "../../../public/ukr.svg";
import { Toggler } from '../Header/Toggler/Toggler';
import { LanguageToggler } from './LanguageToggler/LanguageToggler';
import { useState } from 'react';
// interface IlanguageOptions {
// 	value: string;
// 	label: any;
// 	isDisabled?: boolean;
// }
export const PageBar = ({ title }: any) => {
  const [isLight, setIsLight] = useState<string>(
    document.documentElement.dataset.theme!
  );
  // const langOptions: IlanguageOptions[] = [
  // 	{
  // 		value: constants.UK,
  // 		label: <img width={40} height={20} src={ukFlag} alt="ek" />,
  // 		isDisabled: i18next.language === constants.UK,
  // 	},
  // 	{
  // 		value: constants.EN,
  // 		label: <img width={40} height={20} src={enFlag} alt="en" />,
  // 		isDisabled: i18next.language === constants.EN,
  // 	},
  // ];
  // const themeOptions = [
  // 	{ value: "light", label: "Light" },
  // 	{ value: "dark", label: "dark" },
  // ];
  // const onChangeLang = (value: any) => {
  // 	i18next.changeLanguage(value.value);
  // };
  const handleChangeTheme = (isLight: boolean) => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    setIsLight(
      (document.documentElement.dataset.theme = isLight ? 'light' : 'dark')
    );
  };
  return (
    <div className={styles.conteiner}>
      <h2 className={styles.title}>{title}</h2>
      {/* <label className={styles.label}>
        <input className={styles.input} placeholder={`Type here to search...`}/>
    </label> */}
      <div className={styles.select_options}>
        <Toggler
          isChecked={isLight === 'light' ? true : false}
          toggleTheme={handleChangeTheme}
        />
        {/* <Select options={themeOptions} /> */}
        <LanguageToggler />
        {/* <Select
					isSearchable={false}
					defaultValue={langOptions.find((el) => el.value === i18next.language)}
					onChange={(value) => onChangeLang(value)}
					options={langOptions}
				/> */}
      </div>
    </div>
  );
};
