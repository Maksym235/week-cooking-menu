import { useTranslation } from 'react-i18next';
import styles from './DishesList.module.css';
import { FC } from 'react';
import { IDishesListProps } from '../../../types/dish';
import { ICategoryColors } from '../../../types/category';

export const DishesList: FC<IDishesListProps> = ({ setDish, data, title }) => {
  const { t } = useTranslation();
  const categoryColors: ICategoryColors = {
    Breakfast: 'var(--breakfast)',
    Lunch: 'var(--lunch) ',
    Dinner: 'var(--dinner)',
  };
  const handleSelectDish = (id: string) => {
    setDish(id);
  };
  return (
    <div className={styles.listsContainer}>
      <div className={styles.listWrapper}>
        <p
          style={{
            backgroundColor: categoryColors[title as keyof ICategoryColors],
          }}
          className={styles.listTitle}
        >
          {title}
        </p>
        <ul className={styles.list}>
          {data &&
            data.map(({ name, id, description }) => (
              <li>
                <div
                  onClick={() => handleSelectDish(id)}
                  className={styles.itemConteiner}
                >
                  <div className={styles.img}>
                    {name ? name.slice(0, 1) : ''}
                  </div>
                  <div className={styles.textConteiner}>
                    <p className={styles.itemTitle}>{name}</p>
                    <p className={styles.itemText}>
                      <span className={styles.itemTextDesc}>
                        {t(`DishesPage.dishDesc`)}
                      </span>
                      {': '}
                      {description}
                    </p>
                    {/* <p className={styles.itemText}>{id}</p> */}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
