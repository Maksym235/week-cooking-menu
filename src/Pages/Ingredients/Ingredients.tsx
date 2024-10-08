import styles from './Ingredients.module.css';
// import {Header} from "../../Components/Header/Header.tsx";
import { IngredientsList } from '../../Components/IngredientsList/IngredientsList.tsx';
// import {CreateNewBtn} from "../../Components/CreateNewBtn/CreateNewBtn.tsx";
import { DetailsInfoIngredients } from '../../Components/DetailsInfoIngredients/DetailsInfoIngredients.tsx';
import { useEffect, useState } from 'react';
import { PageBar } from '../../Components/PageBar/PageBar.tsx';
import { useSearchParams } from 'react-router-dom';
import { ShoppingListHistory } from '../../Components/ShoppingListHistory/ShoppingListHistory.tsx';
import { useTranslation } from 'react-i18next';
const Ingredients = () => {
  const { t } = useTranslation();
  const [currentIng, setCurrentIng] = useState(null);
  const [searchParams] = useSearchParams();
  const currentList = searchParams.get('currentList');
  useEffect(() => {
    setCurrentIng(null);
  }, [currentList]);
  const setCurrentIngredient = (item: any) => {
    setCurrentIng(item);
  };

  return (
    <section className={styles.conteiner}>
      <PageBar title={t('Header.ingredients')} />
      {/*<Header title='Ingredients'/>*/}
      <div className={styles.ingWrapper}>
        {currentList && <IngredientsList setCurrent={setCurrentIngredient} />}
        {currentIng && <DetailsInfoIngredients item={currentIng} />}
        {currentList === 'shoppingList' && <ShoppingListHistory />}
      </div>
    </section>
  );
};

export default Ingredients;
