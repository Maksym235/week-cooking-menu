import styles from "./PageBar.module.css";
import Select from "react-select";

export const PageBar = ({ title }: any) => {
  const langOptions = [
    { value: "ua", label: "Ukraine" },
    { value: "en", label: "English" },
  ];
  const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "dark" },
  ];
  return (
    <div className={styles.conteiner}>
      <h2 className={styles.title}>{title}</h2>
      {/* <label className={styles.label}>
        <input className={styles.input} placeholder={`Type here to search...`}/>
    </label> */}
      <div className={styles.select_options}>
        <Select options={themeOptions} />
        <Select options={langOptions} />
      </div>
    </div>
  );
};
