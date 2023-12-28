import styles from "./DishesList.module.css";
import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
export interface IIng {
  name: string;
  id: string;
  category: string[];
}
export interface ITitle {
  title: string;
}

const DISHES = gql`
  query Query {
    getDishes {
      id
      name
      category
    }
  }
`;
export const DishesList: FC<ITitle> = ({ title }) => {
  const { data, loading, error } = useQuery(DISHES);
  //   const data: IIng[] = [
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "Bicycle",
  //       id: "1",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "male",
  //       id: "2",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "City",
  //       id: "3",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "responsive transmitter",
  //       id: "4",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "Bicycle",
  //       id: "1",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "male",
  //       id: "2",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "City",
  //       id: "3",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "responsive transmitter",
  //       id: "4",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "Bicycle",
  //       id: "1",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "male",
  //       id: "2",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "City",
  //       id: "3",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "responsive transmitter",
  //       id: "4",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "Bicycle",
  //       id: "1",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "male",
  //       id: "2",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "City",
  //       id: "3",
  //     },
  //     {
  //       img: "https://loremflickr.com/640/480/food",
  //       name: "responsive transmitter",
  //       id: "4",
  //     },
  //   ];
  if (error) {
    console.log(error);
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className={styles.listsContainer}>
      <div className={styles.listWrapper}>
        <p className={styles.listTitle}>{title}</p>
        <ul className={styles.list}>
          {data.getDishes &&
            data.getDishes.map(({ name, id }: IIng) => (
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
