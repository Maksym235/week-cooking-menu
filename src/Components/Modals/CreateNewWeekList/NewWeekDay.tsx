import styles from "./CreateNewWeekList.module.css";
import Select from "react-select";
import {useState} from "react";
interface IMealtimesDishes {
    breakfastDishes: [Record<string, string>],
        lunchDishes: [Record<string, string>],
        dinnerDishes: [Record<string, string>]
    day: string
}
export const NewWeekDay = ({breakfastDishes, lunchDishes, dinnerDishes, day} : IMealtimesDishes) => {
    const [breakfast, setBreackfast] = useState([])
    const [lunch, setLunch] = useState([])
    const [dinner, setDinner] = useState([])
    const categoryColors: Record<string, string> = {
        Breakfast: "#E8E0FF",
        Lunch: "#FFEDC8 ",
        Dinner: "#CCF2FF",
    };
    const onChangeBreakfast = (evt: any) => {
        setBreackfast(evt)

    }
    const onChangeLunch = (evt: any) => {
        setLunch(evt)
    }

    const onChangeDinner = (evt: any) => {
        setDinner(evt)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.mealtimes_conteiner}>
                    <p className={styles.mealtimes}>Mealtimes:</p>
                    <p
                        style={{backgroundColor: categoryColors.Breakfast}}
                        className={styles.category}
                    >
                        Breakfast
                    </p>
                    <p className={styles.dish}>Dish:</p>
                    <Select isMulti
                            onChange={onChangeBreakfast}
                            name="colors"
                            options={breakfastDishes}/>
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
                        style={{backgroundColor: categoryColors.Lunch}}
                        className={styles.category}
                    >
                        Lunch
                    </p>
                    <p className={styles.dish}>Dish:</p>
                    <Select isMulti
                            defaultValue={lunchDishes}
                            onChange={onChangeLunch}
                            name="colors"
                            options={lunchDishes}/>
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
                        style={{backgroundColor: categoryColors.Dinner}}
                        className={styles.category}
                    >
                        Dinner
                    </p>
                    <p className={styles.dish}>Dish:</p>
                    <Select isMulti
                            onChange={onChangeDinner}
                            name="colors"
                            options={dinnerDishes}/>
                    {/* <Select
            defaultValue={options[2]}
            styles={selectStypes}
            onChange={onChangeSelect}
            options={options}
          /> */}
                    {/* <p>{dinner ? dinner: ''}</p> */}
                </div>
            </div>
        </>
    );
};