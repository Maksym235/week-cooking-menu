import { IIngredients } from './ingredients';

export interface IDish {
  id: string;
  name: string;
  category: string[];
  ingredients: IIngredients[];
  description?: string;
}
