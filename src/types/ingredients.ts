export interface IIngredients {
  name: string;
  category: string;
  defaultValue?: number;
  id?: string;
  count?: number;
  weightType: string;
  description?: string;
}
// IngredientsList========================

export interface IIngredientInList {
  id: string;
  name: string;
  description: string;
}
export interface IShoppingListItem {
  img: string;
  name: string;
}
