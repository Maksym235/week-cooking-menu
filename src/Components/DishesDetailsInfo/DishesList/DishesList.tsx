import styles from "./DishesList.module.css";
import { FC } from "react";
export interface IIng {
  name: string;
  id: string;
  category: string[];
}
export interface IProps {
  title: string;
  data: any;
}
export const DishesList: FC<IProps> = ({ data, title }) => {
  return (
    <div className={styles.listsContainer}>
      <div className={styles.listWrapper}>
        <p className={styles.listTitle}>{title}</p>
        <ul className={styles.list}>
          {data &&
            data.map(({ name, id }: IIng) => (
              <li>
                <div className={styles.itemConteiner}>
                  <img
                    src='"https://loremflickr.com/640/480/food"'
                    alt={name}
                    className={styles.img}
                  />
                  <div className={styles.textConteiner}>
                    <p className={styles.itemTitle}>{name}</p>
                    <p className={styles.itemText}>200gram</p>
                    <p className={styles.itemText}>{id}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
