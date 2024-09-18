import styles from './AddDish.module.css';
import { useMutation, useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { Loading } from '../../Loading/Loading';
import { CategorySelect } from '../EditDishInfo/CategorySelect/CategorySelect';
import plus from '../../../../public/plus.svg';
import { FaRegTrashAlt } from 'react-icons/fa';
interface IPropsDishModal {
  toggleIsOpen: () => void;
}
const GET_ALL_INGREDIENTS = gql`
  query Query {
    getIngredients {
      id
      name
      category
      defaultValue
      description
      weightType
    }
  }
`;
const ADD_DISH = gql`
  mutation Mutation(
    $name: String!
    $category: [String!]
    $description: String
    $ingredients: [IngredientInDish]!
  ) {
    addDish(
      name: $name
      category: $category
      description: $description
      ingredients: $ingredients
    ) {
      id
      name
      category
      description
    }
  }
`;
export interface IIngredientsAddDish {
  id: string;
  name: string;
  category: string;
  defaultValue: number;
  description: string;
  weightType: string;
}
export interface IIngredientsData {
  getIngredients: IIngredientsAddDish[];
}
export interface IDishIngredient {
  id: '';
  name: '';
  category: '';
  defaultValue: number;
  weightType: '';
  count: number;
  description: '';
  owner: '';
}

export interface IIngredientCount {
  key: number;
  ing: IDishIngredient;
}
const AddDishModal: React.FC<IPropsDishModal> = ({ toggleIsOpen }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [ingredientsCount, setIngredientsCount] = useState<IIngredientCount[]>([
    {
      key: 1,
      ing: {
        id: '',
        name: '',
        category: '',
        defaultValue: 0,
        weightType: '',
        count: 0,
        description: '',
        owner: '',
      },
    },
  ]);
  const {
    data: IngsData,
    loading: IngLoading,
    error: IngError,
  } = useQuery<IIngredientsData>(GET_ALL_INGREDIENTS);
  const [addDish, { data, loading, error }] = useMutation(ADD_DISH);
  // const { register, handleSubmit } = useForm();;
  const { control, handleSubmit } = useForm();
  // const options = [
  // 	{ value: "Dinner", label: "Dinner" },
  // 	{ value: "Lunch", label: "Lunch" },
  // 	{ value: "Breakfast", label: "Breakfast" },
  // ];
  const ingsOptions = IngsData?.getIngredients?.map((item) => {
    return { value: item, label: item.name };
  });
  // [
  // 	{value: "", label: ""}
  // ]
  const weightsType = [
    { label: 'грам', value: 'грам' },
    { label: 'шт', value: 'шт' },
    { label: 'мл', value: 'мл' },
    { label: 'дрібка', value: 'дрібка' },
    { label: 'стакан', value: 'стакан' },
    { label: 'ст.л', value: 'ст.л' },
    { label: 'ч.л', value: 'ч.л' },
  ];
  const submitForm = (data: any) => {
    const finishData = {
      name: data.name,
      category: selectedCategory,
      description: data.description,
      ingredients: ingredientsCount.map((item) => item.ing),
    };
    addDish({
      variables: finishData,
    });

    console.log(finishData);
  };
  if (data) {
    toggleIsOpen();
  }
  if (loading || IngLoading) {
    return <Loading />;
  }
  if (error || IngError) {
    return <div>{error?.message || IngError?.message}</div>;
  }

  const indexFind = (key: number) => {
    return ingredientsCount.findIndex((item) => item.key === key);
  };
  const handleAddIngredients = () => {
    const intialIng = {
      id: '',
      name: '',
      category: '',
      defaultValue: 0,
      weightType: '',
      count: 0,
      weightInGrams: 0,
      description: '',
      owner: '',
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const lastIndex = ingredientsCount.findLastIndex((item: any) => item);
    let lastkey: number;
    if (lastIndex !== -1) {
      lastkey = ingredientsCount[lastIndex].key + 1;
      setIngredientsCount((state: any) => [
        ...state,
        { key: lastkey, ing: intialIng },
      ]);
      return;
    }
    setIngredientsCount((state: any) => [...state, { key: 0, ing: intialIng }]);
  };
  const handleDeleteIng = (key: number) => {
    console.log(key);
    setIngredientsCount(ingredientsCount.filter((item) => item.key !== key));
  };
  const handleSelectIngredient = (evt: any, key: number) => {
    const index = indexFind(key);
    const newIng = {
      key: key,
      ing: { ...evt.value, count: 0, owner: '' },
    };
    delete newIng.ing.__typename;
    const updatedData = ingredientsCount;

    updatedData.splice(index, 1, newIng);

    setIngredientsCount(updatedData);
  };

  const handleChangeWeightType = (evt: any, key: number) => {
    const index = indexFind(key);
    const item = ingredientsCount[index];
    const updatedData = ingredientsCount;
    updatedData.splice(index, 1, {
      key: key,
      ing: { ...item.ing, weightType: evt.value },
    });
    console.log(ingredientsCount);
  };
  const handleChangeCountIng = (evt: any, key: number) => {
    const index = indexFind(key);
    const item = ingredientsCount[index];
    const updatedData = ingredientsCount;
    updatedData.splice(index, 1, {
      key: key,
      ing: { ...item.ing, count: Number(evt.target.value) },
    });

    console.log(typeof evt.target.value);
  };
  const handdleSelectCategory = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((el) => el !== category));
      return;
    }
    setSelectedCategory((state) => [...state, category]);
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => submitForm(data))}
    >
      <label className={styles.label}>
        {t(`Modals.AddDish.name`)}
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <input
              placeholder={t(`Modals.AddDish.name`)}
              className={styles.input}
              {...field}
            />
          )}
        />
        {/* <input
					className={styles.input}
					{...register("name")}
					placeholder="name"
				/> */}
      </label>
      <label className={styles.label}>
        {t(`Modals.AddDish.category`)}
        <Controller
          name='category'
          control={control}
          render={() => (
            <CategorySelect
              selectCategory={handdleSelectCategory}
              selectedCategory={selectedCategory}
            />
            // <Select
            // 	// className={styles.select}
            // 	{...field}
            // 	defaultValue={[options[1], options[2]]}
            // 	isMulti
            // 	name="colors"
            // 	options={options}
            // 	className="basic-multi-select"
            // 	classNamePrefix="select"
            // />
          )}
        />
        {/* <select className={styles.select} {...register("category")}>
					<option value="Breakfast">breakfast</option>
					<option value="Lunch">lunch</option>
					<option value="Dinner">dinner</option>
				</select> */}
      </label>
      <label className={styles.label}>
        {t(`Modals.AddDish.desc`)}
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <input
              placeholder={t(`Modals.AddDish.desc`)}
              className={styles.input}
              {...field}
            />
          )}
        />
        {/* <input
					className={styles.input}
					{...register("description")}
					placeholder="description"
				/> */}
      </label>
      <div>
        <label className={styles.label}>
          {t(`Modals.AddDish.ingredients.ingredients`)}
        </label>
        <ul className={styles.ingredients_list}>
          {ingredientsCount.map((el: any) => (
            <li key={el.key}>
              {/* <label className={styles.label}> */}
              <div className={styles.list_title_wrapper}>
                <p className={styles.label}>
                  {t(`Modals.AddDish.ingredients.ingredient`)}
                </p>
                <FaRegTrashAlt
                  onClick={() => handleDeleteIng(el.key)}
                  className={styles.trash}
                  color='var(--accentColor)'
                />
              </div>
              <Select
                onChange={(evt) => handleSelectIngredient(evt, el.key)}
                isSearchable={true}
                options={ingsOptions}
                isLoading={IngLoading}
              />
              <div className={styles.select_container}>
                <div>
                  <p className={styles.label}>
                    {t(`Modals.AddDish.ingredients.count`)}
                  </p>
                  <input
                    type='number'
                    onBlur={(evt) => handleChangeCountIng(evt, el.key)}
                    // onChange={(evt) => handleChangeCountIng(evt, el.key)}
                    className={`${styles.input} ${styles['select_ing']}`}
                  />
                </div>
                <div>
                  <p className={styles.label}>
                    {t(`Modals.AddDish.ingredients.weightType`)}
                  </p>
                  <Select
                    options={weightsType}
                    onChange={(evt) => handleChangeWeightType(evt, el.key)}
                    defaultValue={
                      weightsType[
                        weightsType.findIndex(
                          (item) => item.value === el.ing.weightType
                        )
                      ]
                    }
                    className={styles['select_ing']}
                  />
                </div>
              </div>
              {/* </label> */}
            </li>
          ))}
        </ul>
        <div className={styles.add_ing} onClick={handleAddIngredients}>
          <img src={plus} alt='adds_ings' />
        </div>
      </div>
      <input className={styles.submit_btn} type='submit' />
    </form>
  );
};

export default AddDishModal;
