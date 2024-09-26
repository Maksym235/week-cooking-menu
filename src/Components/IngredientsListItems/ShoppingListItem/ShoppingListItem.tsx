import { IShoppingListItem } from '../../../types/ingredients';
import styles from './ShoppingListItem.module.css';
import { FC } from 'react';

export const ShoppingListItem: FC<IShoppingListItem> = ({ name }) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.wrapper}>
        <div className={styles.ing_image}>
          {name ? name.slice(0, 1).toUpperCase() : ''}
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>
            Category: <span className={styles.descriptionValue}>Cheese</span>
          </p>
          <p className={styles.description}>
            Count: <span className={styles.descriptionValue}>200gram</span>
          </p>
        </div>
      </div>
      <div className={styles.icon}></div>
    </div>
  );
};
