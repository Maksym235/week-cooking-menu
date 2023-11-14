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
  return (
    <div className={styles.conteiner}>
      <div className={styles.header} style={{ backgroundColor: color }}>
        <p>{title}</p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <p>Breakfast</p>
          <Select

            onChange={onChangeSelect}
            options={options}
          />
            <p>{breakfast ? breakfast: ''}</p>
        </div>
        <div>
          <p>Lunch</p>
          <Select
            // value={selectedOption}
            onChange={onChangeSelect}
            options={options}
          />
            <p>{lunch ? lunch: ''}</p>
        </div>
        <div>
          <p>Dinner</p>
          <Select
            // value={selectedOption}
            onChange={onChangeSelect}
            options={options}
          />
            <p>{dinner ? dinner: ''}</p>
        </div>
      </div>
    </div>
  );
};
