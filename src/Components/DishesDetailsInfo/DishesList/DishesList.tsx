import { useTranslation } from 'react-i18next';
import styles from './DishesList.module.css';
import { FC } from 'react';
export interface IIng {
  name: string;
  id: string;
  description: string;
  category: string[];
}
export interface IProps {
  title: string;
  data: any;
  setDish: (id: string) => void;
}

export const DishesList: FC<IProps> = ({ setDish, data, title }) => {
  const { t } = useTranslation();
  const categoryColors: Record<string, string> = {
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
          style={{ backgroundColor: categoryColors[title] }}
          className={styles.listTitle}
        >
          {title}
        </p>
        <ul className={styles.list}>
          {data &&
            data.map(({ name, id, description }: IIng) => (
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
