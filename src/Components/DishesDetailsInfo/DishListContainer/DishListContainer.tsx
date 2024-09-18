import styles from './DishListContainer.module.css';
import { FC, useState } from 'react';
import { DishesList } from '../DishesList/DishesList.tsx';
import { ModalConteiner } from '../../ModalConteiner/ModalContainer.tsx';
import AddDishModal from '../../Modals/AddDish/AddDishModal.tsx';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Loading } from '../../Loading/Loading.tsx';

export interface IDishesListProps {
  setDish: (id: string) => void;
}
const DISHES = gql`
  query Query {
    getDishes {
      id
      name
      description
      category
    }
  }
`;
const CATEGORIES: string[] = ['Breakfast', 'Lunch', 'Dinner'];
export const DishListContainer: FC<IDishesListProps> = ({ setDish }) => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(DISHES);
  const [isOpenmodal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const toggleAddDishmodal = () => {
    setIsOpenModal((state) => !state);
  };
  if (error) {
    console.log(error);
    if (error.message === 'not auth' || error.message === 'Unauthorized') {
      navigate('/');
      toast.error(`please sign in or sign up`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    if (error.message === 'Context creation failed: jwt expired') {
      localStorage.clear();
      navigate('/');
      toast.error(`please sign in or sign up`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerCard}>
          <p className={styles.headerTitle}>{t(`DishesPage.dishesList`)}</p>
          <button onClick={toggleAddDishmodal} className={styles.headerBtn}>
            {t(`DishesPage.addDish`)}
          </button>
        </div>
        <div className={styles.listFlex}>
          {CATEGORIES.map((item) => {
            const dataOfCategory = data.getDishes.filter((dish: any) =>
              dish.category.includes(item)
            );
            return (
              <DishesList
                setDish={setDish}
                data={dataOfCategory}
                title={item}
              />
            );
          })}
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
