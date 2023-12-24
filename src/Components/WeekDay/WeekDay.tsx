import styles from "./WeekDay.module.css";
import Select from "react-select";
import { useState } from "react";
const options = [
  { value: "breakfast", label: "Chocolate" },
  { value: "lunch", label: "Strawberry" },
  { value: "dinner", label: "Vanilla" },
];
export const WeekDay = ({ title, color }: { title: string; color: string }) => {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const onChangeSelect = (selectedOption: any) => {
    switch (selectedOption.value) {
      case "breakfast":
        setBreakfast(selectedOption.label);
        break;
      case "lunch":
        setLunch(selectedOption.label);
        break;
      case "dinner":
        setDinner(selectedOption.label);
        break;
    }
  };
  

  const selectStypes = {
    container: (baseStyles:any) => ({
      ...baseStyles,
    }),
    control: (baseStyles:any) => ({
      ...baseStyles,
      backgroundColor: "#F7F7F7",
      border: 'none',
      borderRadius: '40px'
    }),
  }
  return (
    <div className={styles.conteiner}>
      <div className={styles.header} >
        <p>{title}</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>Mealtimes:</p>
          <p className={styles.category}>Breacfast</p>
          <p className={styles.dish}>Dish:</p>
          <Select
           styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          />
            {/* <p>{breakfast ? breakfast: ''}</p> */}
        </div>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>Mealtimes:</p>
          <p className={styles.category}>Lunch</p>
          <p className={styles.dish}>Dish:</p>
          <Select
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          />
            {/* <p>{lunch ? lunch: ''}</p> */}
        </div>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>Mealtimes:</p>
          <p className={styles.category}>Dinner</p>
          <p className={styles.dish}>Dish:</p>
          <Select
           styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          />
            {/* <p>{dinner ? dinner: ''}</p> */}
        </div>
      </div>
    </div>
  );
};
