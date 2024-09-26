export interface ICategoryColors {
  Breakfast: string;
  Lunch: string;
  Dinner: string;
}
export interface ICategorySelectProps {
  selectedCategory: string[];
  selectCategory: (category: string) => void;
}
