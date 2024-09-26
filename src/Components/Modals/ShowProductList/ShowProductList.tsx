import React from 'react';
import styles from './ShowProductList.module.css';
import { toast } from 'react-toastify';
import { IShowProductListProps } from '../../../types/WeekDay';

export const ShowProductList: React.FC<IShowProductListProps> = ({
  toggleIsOpen,
  data,
}) => {
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
