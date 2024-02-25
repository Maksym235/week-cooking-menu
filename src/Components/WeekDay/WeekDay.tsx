import styles from "./WeekDay.module.css";
// import Select from "react-select";
import { FC } from "react";
import { IWeekDay } from "../../types/WeekDay";

interface IProps {
  day: IWeekDay;
}

export const WeekDay: FC<IProps> = ({ day }) => {
  console.log(day);
  // const [breakfast, setBreakfast] = useState("");
  // const [lunch, setLunch] = useState("");
  // const [dinner, setDinner] = useState("");
  const options = [
    { value: "breakfast", label: day.b.name },
    { value: "lunch", label: day.l.name },
    { value: "dinner", label: day.d.name },
  ];
  console.log(options);
  // const onChangeSelect = (selectedOption: any) => {
  //   switch (selectedOption.value) {
  //     case "breakfast":
  //       setBreakfast(selectedOption.label);
  //       break;
  //     case "lunch":
  //       setLunch(selectedOption.label);
  //       break;
  //     case "dinner":
  //       setDinner(selectedOption.label);
  //       break;
  //   }
  // };

  const categoryColors: Record<string, string> = {
    Breakfast: "#E8E0FF",
    Lunch: "#FFEDC8 ",
    Dinner: "#CCF2FF",
  };

  // const selectStypes = {
  //   container: (baseStyles: any) => ({
  //     ...baseStyles,
  //   }),
  //   control: (baseStyles: any) => ({
  //     ...baseStyles,
  //     backgroundColor: "#F7F7F7",
  //     border: "none",
  //     borderRadius: "40px",
  //   }),
  // };
  return (
    <div className={styles.conteiner}>
      <div className={styles.header}>
        <p className={styles.title}>{day.day}</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>Mealtimes:</p>
          <p
            style={{ backgroundColor: categoryColors.Breakfast }}
            className={styles.category}
          >
            Breakfast
          </p>
          <p className={styles.dish}>Dish:</p>
          <p>{day.b.name}</p>
          {/* <Select
            defaultValue={options[0]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
          {/* <p>{breakfast ? breakfast: ''}</p> */}
        </div>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>Mealtimes:</p>
          <p
            style={{ backgroundColor: categoryColors.Lunch }}
            className={styles.category}
          >
            Lunch
          </p>
          <p className={styles.dish}>Dish:</p>
          <p>{day.l.name}</p>
          {/* <Select
            defaultValue={options[1]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
          {/* <p>{lunch ? lunch: ''}</p> */}
        </div>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>Mealtimes:</p>
          <p
            style={{ backgroundColor: categoryColors.Dinner }}
            className={styles.category}
          >
            Dinner
          </p>
          <p className={styles.dish}>Dish:</p>
          <p>{day.d.name}</p>
          {/* <Select
            defaultValue={options[2]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
          {/* <p>{dinner ? dinner: ''}</p> */}
        </div>
      </div>
    </div>
  );
};
