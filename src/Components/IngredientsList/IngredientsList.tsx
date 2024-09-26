import styles from './IngredientsList.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { YourIngredientsListItem } from '../IngredientsListItems/YourIngredientsItem/YourIngredientsListItem.tsx';
import { ShoppingListItem } from '../IngredientsListItems/ShoppingListItem/ShoppingListItem.tsx';
import { useQuery, gql } from '@apollo/client';
import { ModalConteiner } from '../ModalConteiner/ModalContainer.tsx';
import { AddIngredientModal } from '../Modals/AddIngredient/AddIngredientModal.tsx';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { errorOptions } from '../../utils/toastOptions.ts';
import { Loading } from '../Loading/Loading.tsx';
import { IIngredientInList } from '../../types/ingredients.ts';

const YING = gql`
  query Query {
    getIngredients {
      id
      name
      description
    }
  }
`;
export const IngredientsList = ({ setCurrent }: any) => {
  const { t } = useTranslation();
  const titleVariables: any = {
    yourIngs: t(`IngredientsPage.yourIngrediens`),
    shoppingList: t(`IngredientsPage.shoppingList`),
  };
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery(YING);
  const [curItem, setCurItem] = useState('');
  const [searchParams] = useSearchParams();
  const currentList = searchParams.get('currentList');
  const [curListState, setCurListState] = useState<string | null>(currentList);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    setCurListState(currentList);
    setCurItem('');
  }, [currentList]);
  const setCurrentIng = (item: any) => {
    setCurrent(item);
    setCurItem(item.id);
  };
  const toggleAddIngModal = () => {
    setIsOpenModal((state) => !state);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    if (error.message === 'not auth') {
      navigate('/');
      toast.error(`please sign in or sign up`, errorOptions);
    }
    if (error.message === 'Context creation failed: jwt expired') {
      localStorage.clear();
      navigate('/');
      toast.error(`please sign in or sign up`, errorOptions);
    }
    return <div>{error.message}</div>;
  }
  return (
    <div className={styles.list_conteiner}>
      <div className={styles.listHeader}>
        <p className={styles.title}>
          {curListState && titleVariables[curListState]}
        </p>
        <button onClick={toggleAddIngModal} className={styles.listHeaderBtn}>
          {t(`IngredientsPage.addIng`)}
        </button>
      </div>
      {
        <ul className={styles.list}>
          {data &&
            data.getIngredients.map((item: IIngredientInList) => (
              <li
                onClick={() =>
                  curListState === 'yourIngs' && setCurrentIng(item)
                }
                className={
                  curItem === item.id
                    ? styles.list_item_current
                    : styles.list_item
                }
                key={item.id}
              >
                {curListState === 'yourIngs' && (
                  <YourIngredientsListItem
                    img={'https://loremflickr.com/640/480/food'}
                    name={item.name}
                    isCurrent={curItem === item.id}
                    id={item.id}
                    description={item.description}
                  />
                )}
                {curListState === 'shoppingList' && (
                  <ShoppingListItem
                    img={'https://loremflickr.com/640/480/food'}
                    name={item.name}
                  />
                )}
                {/*<img className={styles.ing_image} src={item.img} alt={item.name}/>*/}
                {/*<p>{item.name}</p>*/}
              </li>
            ))}
        </ul>
      }
      <ModalConteiner
        toggleIsOpen={toggleAddIngModal}
        isOpen={isOpenModal}
        children={
          <AddIngredientModal
            refetchData={refetch}
            toggleIsOpen={toggleAddIngModal}
          />
        }
      />
    </div>
  );
};
