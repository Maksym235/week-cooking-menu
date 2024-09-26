import { FC } from 'react';
import styles from './WeekDaysSideBar.module.css';
// import arowRight from "../../../public/arow-right.svg";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Arrow from '/public/arow-right.svg?react';
import { useTranslation } from 'react-i18next';
import { IWeekDaysSideBarProps } from '../../types/WeekDay';

export const WeekDaysSideBar: FC<IWeekDaysSideBarProps> = ({
  curDayKey,
  week,
  handleSetCurrentDay,
}) => {
  const { t } = useTranslation();

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
            {t(`MenuPage.days.${item.day.toLowerCase()}`)}
            <Arrow
              stroke={
                curDayKey === item.key
                  ? 'var(--textColor)'
                  : 'var(--silverColor)'
              }
            />
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
