import React from 'react';
import styles from './ShowProductList.module.css';
import { toast } from 'react-toastify';
export interface IDataProduct {
  count: number;
  weightType: string;
}

export interface IdataType {
  [key: string]: IDataProduct;
}
// const data: IdataType = {
// 	Молоко: {
// 		count: 350,
// 		weightType: "мл",
// 	},
// 	Олія: {
// 		count: 45,
// 		weightType: "ст.л",
// 	},
// 	яйце: {
// 		count: 0,
// 		weightType: "шт",
// 	},
// 	цукор: {
// 		count: 10,
// 		weightType: "ч.л",
// 	},
// 	сіль: {
// 		count: 2,
// 		weightType: "дрібка",
// 	},
// 	Розпушувач: {
// 		count: 5,
// 		weightType: "ч.л",
// 	},
// 	борошно: {
// 		count: 1,
// 		weightType: "грам",
// 	},
// };
export interface IProps {
  toggleIsOpen: () => void;
  data: IdataType;
}
export const ShowProductList: React.FC<IProps> = ({ toggleIsOpen, data }) => {
  const stringToCopy = Object.keys(data)
    .map(
      (el) =>
        `${el} - ${data[el].count ? data[el].count : ''} ${
          data[el].weightType ? data[el].weightType : ''
        } \n`
    )
    .join(' ');

  const handleCopy = () => {
    navigator.clipboard.writeText(stringToCopy);
    toast.success(`Скопійовано до буферу`);
  };
  // console.log(stringToCopy);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Список продуктів</h4>

      <ul className={styles.list}>
        {Object.keys(data).map((el) => (
          <li className={styles.list_item}>
            <p className={styles.list_item_desc}>
              <span className={styles.list_item_title}>{el}</span> -{' '}
              {data[el].count} {data[el].weightType}
            </p>
          </li>
        ))}
      </ul>
      <div className={styles.settings_block}>
        <button onClick={toggleIsOpen} className={styles.btn}>
          Save as photo
        </button>
        <button onClick={handleCopy} className={styles.btn}>
          Copy to clickboard
        </button>
      </div>
    </div>
  );
};
