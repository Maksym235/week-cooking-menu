import styles from './WeekDay.module.css';
// import Select from "react-select";
import { FC } from 'react';
import { IWeekDay } from '../../types/WeekDay';
// import edit from "../../../public/icon_pencil.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import Arrow from "/public/arow-right.svg?react";
import EditSvg from '/public/icon_pencil.svg?react';
import { useTranslation } from 'react-i18next';
interface IProps {
  day: IWeekDay;
  weekId: string;
  togleIsOpen: () => void;
  changeMealtime: any;
}

export const WeekDay: FC<IProps> = ({ day, togleIsOpen, changeMealtime }) => {
  const { t } = useTranslation();
  const onEditDish = (mealtime: string) => {
    togleIsOpen();
    changeMealtime(mealtime);
  };

  const categoryColors: Record<string, string> = {
    Breakfast: 'var(--breakfast)',
    Lunch: 'var(--lunch) ',
    Dinner: 'var(--dinner)',
  };
  return (
    <div className={styles.conteiner}>
      <div className={styles.header}>
        <p className={styles.title}>
          {t(`MenuPage.days.${day.day.toLowerCase()}`)}
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>{t(`MenuPage.mealtimes`)}:</p>
          <p
            style={{ backgroundColor: categoryColors.Breakfast }}
            className={styles.category}
          >
            {t(`Categories.breakfast`)}
          </p>
          <p className={styles.dish}>{t(`MenuPage.dish`)}:</p>
          <p className={styles.itemName}>{day?.b?.name ? day.b.name : '-'}</p>
          <button
            className={styles.icon_conteiner}
            onClick={() => onEditDish('Breakfast')}
            disabled={changeMealtime === null}
          >
            <EditSvg
              fill={
                changeMealtime === null
                  ? 'var(--disabledColor)'
                  : 'var(--accentColor)'
              }
              stroke={
                changeMealtime === null
                  ? 'var(--disabledColor)'
                  : 'var(--accentColor)'
              }
            />
          </button>
        </div>

        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>{t(`MenuPage.mealtimes`)}:</p>
          <p
            style={{ backgroundColor: categoryColors.Lunch }}
            className={styles.category}
          >
            {t(`Categories.lunch`)}
          </p>
          <p className={styles.dish}>{t(`MenuPage.dish`)}:</p>
          <p className={styles.itemName}>{day?.l?.name ? day.l.name : '-'}</p>
          <button
            className={styles.icon_conteiner}
            onClick={() => onEditDish('Lunch')}
            disabled={changeMealtime === null}
          >
            <EditSvg
              fill={
                changeMealtime === null
                  ? 'var(--disabledColor)'
                  : 'var(--accentColor)'
              }
              stroke={
                changeMealtime === null
                  ? 'var(--disabledColor)'
                  : 'var(--accentColor)'
              }
            />
          </button>
        </div>
        <div className={styles.mealtimes_conteiner}>
          <p className={styles.mealtimes}>{t(`MenuPage.mealtimes`)}:</p>
          <p
            style={{ backgroundColor: categoryColors.Dinner }}
            className={styles.category}
          >
            {t(`Categories.dinner`)}
          </p>
          <p className={styles.dish}>{t(`MenuPage.dish`)}:</p>
          <p className={styles.itemName}>{day?.d?.name ? day.d.name : '-'}</p>
          <button
            className={styles.icon_conteiner}
            onClick={() => onEditDish('Dinner')}
            disabled={changeMealtime === null}
          >
            <EditSvg
              fill={
                changeMealtime === null
                  ? 'var(--disabledColor)'
                  : 'var(--accentColor)'
              }
              stroke={
                changeMealtime === null
                  ? 'var(--disabledColor)'
                  : 'var(--accentColor)'
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};
