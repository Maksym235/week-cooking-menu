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
export interface IIngredient {
  id: string;
  name: string;
  description: string;
}
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
  // const testData = [
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "Bicycle",
  // 		id: "1",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "male",
  // 		id: "2",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "City",
  // 		id: "3",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "responsive transmitter",
  // 		id: "4",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "black",
  // 		id: "5",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "mole quantify",
  // 		id: "6",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "Alabama wildly wherever",
  // 		id: "7",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "purple",
  // 		id: "8",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "nisi methodologies alliance",
  // 		id: "9",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "writ",
  // 		id: "10",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "Sleek Neither Netherlands",
  // 		id: "11",
  // 	},
  // 	{
  // 		img: "https://loremflickr.com/640/480/food",
  // 		name: "emulation Jaguar Expanded",
  // 		id: "12",
  // 	},
  // ];

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
            data.getIngredients.map((item: IIngredient) => (
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
