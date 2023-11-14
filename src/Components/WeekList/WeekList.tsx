import styles from './WeekList.module.css'
import {WeekDay} from "../WeekDay/WeekDay.tsx";

const week = [
    {
        day: "Monday",
        key: 1
    },
    {
        day: "Tuesday",
        key: 2
    },
    {
        day: "Wednesday",
        key: 3
    },
    {
        day: "Thursday",
        key: 4
    },
    {
        day: "Friday",
        key: 5
    },
    {
        day: "Saturday",
        key: 6
    },
    {
        day: "Sunday",
        key: 7
    },
]
const getRandomColor = () => {
    // Генеруємо випадкові значення для червоного, зеленого і синього
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Складаємо кольоровий код у форматі RGB
    const color = "rgb(" + red + "," + green + "," + blue + ")";

    return color;
}

    export const WeekList = () => {

return (
<section className={styles.conteiner}>
    <ul className={styles.list}>
        {week.map((item: {day: string, key: number}) => <li key={item.key}><WeekDay color={getRandomColor()} title={item.day}/></li>)}
    </ul>
</section>
)
}