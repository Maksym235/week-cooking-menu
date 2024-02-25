import { FC } from "react";
import styles from "./WeekDaysSideBar.module.css";
// import arowRight from "../../../public/arow-right.svg";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Arrow from "/public/arow-right.svg?react";
interface IDay {
  day: string;
  key: number;
}

interface IProps {
  week: IDay[];
  curDayKey: number;
  handleSetCurrentDay: (day: IDay) => void;
}

export const WeekDaysSideBar: FC<IProps> = ({
  curDayKey,
  week,
  handleSetCurrentDay,
}) => {
  return (
    <>
      <ul className={styles.daysList}>
        {week.map((item) => (
          <li
            onClick={() => handleSetCurrentDay(item)}
            className={
              curDayKey === item.key
                ? `${styles.daysList_item} ${styles.active}`
                : styles.daysList_item
            }
          >
            {item.day}
            <Arrow />
            {/* <img
              className={styles.daysList_item_icon}
              src={arowRight}
              alt="Arrow to right"
            /> */}
          </li>
        ))}
      </ul>
    </>
  );
};
