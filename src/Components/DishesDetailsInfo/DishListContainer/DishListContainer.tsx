import styles from "./DishListContainer.module.css";
import { FC, useState } from "react";
import { DishesList } from "../DishesList/DishesList.tsx";
import { ModalConteiner } from "../../ModalConteiner/ModalContainer.tsx";
import AddDishModal from "../../Modals/AddDish/AddDishModal.tsx";

const CATEGORIES: string[] = ["Breakfast", "Lunch", "Dinner"];
export const DishListContainer: FC = () => {
  const [isOpenmodal, setIsOpenModal] = useState(false);
  const toggleAddDishmodal = () => {
    console.log("open");
    setIsOpenModal((state) => !state);
  };
  console.log(CATEGORIES);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerCard}>
          <p className={styles.headerTitle}>List of dishes for today</p>
          <button onClick={toggleAddDishmodal} className={styles.headerBtn}>
            Add Dish
          </button>
        </div>
        <div className={styles.listFlex}>
          {CATEGORIES.map((item) => (
            <DishesList title={item} />
          ))}
        </div>
      </div>
      <ModalConteiner
        toggleIsOpen={toggleAddDishmodal}
        isOpen={isOpenmodal}
        children={
          <AddDishModal
            // refetchData={refetch}
            toggleIsOpen={toggleAddDishmodal}
          />
        }
      />
    </>
  );
};
