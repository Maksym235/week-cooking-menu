import { FC } from 'react';
import styles from './CategorySelect.module.css';
import {
  ICategoryColors,
  ICategorySelectProps,
} from '../../../../types/category';

export const CategorySelect: FC<ICategorySelectProps> = ({
  selectCategory,
  selectedCategory,
}) => {
  const categoryColors: ICategoryColors = {
    Breakfast: 'var(--breakfast)',
    Lunch: 'var(--lunch) ',
    Dinner: 'var(--dinner)',
  };
  const handdleSelectCategory = (evt: any) => {
    const category: string = evt.target.name;
    selectCategory(category);
  };
  return (
    <>
      <form className={styles.form}>
        <label
          style={{ backgroundColor: categoryColors['Breakfast'] }}
          className={
            selectedCategory.includes('Breakfast')
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
        >
          <input
            onChange={handdleSelectCategory}
            className={styles.input}
            type='checkbox'
            value='Breakfast'
            name='Breakfast'
          />
          Breakfast
        </label>
        <label
          style={{ backgroundColor: categoryColors['Lunch'] }}
          className={
            selectedCategory.includes('Lunch')
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
        >
          <input
            onChange={handdleSelectCategory}
            className={styles.input}
            type='checkbox'
            value='Lunch'
            name='Lunch'
          />
          Lunch
        </label>
        <label
          style={{
            backgroundColor: categoryColors['Dinner'],
          }}
          className={
            selectedCategory.includes('Dinner')
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
        >
          <input
            onChange={handdleSelectCategory}
            className={styles.input}
            type='checkbox'
            value='Dinner'
            name='Dinner'
          />
          Dinner
        </label>
      </form>
    </>
  );
};
