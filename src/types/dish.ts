import { IWeekDay } from './WeekDay';
import { IIngredients } from './ingredients';

export interface IDish {
  id: string;
  name: string;
  category: string[];
  ingredients?: IIngredients[];
  description?: string;
}

export interface IDishId {
  dishId: string;
}

export interface IIng {
  name: string;
  id: string;
  description: string;
  category: string[];
}

export interface IDishesListProps {
  title: string;
  data: IDish[];
  setDish: (id: string) => void;
}

export interface IDishesListContainerProps {
  setDish: (id: string) => void;
}

export interface IAddDishModalProps {
  toggleIsOpen: () => void;
}
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
  id: string;
  name: string;
  category: string;
  defaultValue: number;
  weightType: string;
  count: number;
  description: string;
  owner: string;
}

export interface IIngredientCount {
  key: number;
  ing: IDishIngredient;
}

export interface IEditDishIngredientsProps {
  refetchData: any;
  toggleIsOpen: () => void;
  dishId: string;
  ings: any;
}

interface ICurDay {
  day: string;
  key: number;
}

export interface ISetToDayNewDishProps {
  toggleIsOpen: () => void;
  mealtime: string;
  refetchData: any;
  currentDay: ICurDay;
  dayData: IWeekDay;
  weekId: string;
}

export interface ISelectedListCard {
  name: string;
  desc: string;
  category: string[];
}
