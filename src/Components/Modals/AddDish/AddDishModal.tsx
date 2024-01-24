import styles from "./AddDish.module.css";
import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
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
const AddDishModal = ({ toggleIsOpen }: any) => {
  const [addDish, { data, loading, error }] = useMutation(ADD_DISH);
  const { register, handleSubmit } = useForm();

  const submitForm = (data: any) => {
    addDish({
      variables: {
        name: data.name,
        category: data.category,
        description: data.description,
        ingredients: [
          {
            name: "test",
            category: "",
            defaultValue: 10,
            description: "",
          },
        ],
      },
    });
  };
  if (data) {
    toggleIsOpen();
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => submitForm(data))}
    >
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          {...register("name")}
          placeholder="name"
        />
      </label>
      <label className={styles.label}>
        Category
        <select className={styles.select} {...register("category")}>
          <option value="Breakfast">breakfast</option>
          <option value="Lunch">lunch</option>
          <option value="Dinner">dinner</option>
        </select>
      </label>
      <label className={styles.label}>
        Description
        <input
          className={styles.input}
          {...register("description")}
          placeholder="description"
        />
      </label>
      <p>{data}</p>
      <input className={styles.submit_btn} type="submit" />
    </form>
  );
};

export default AddDishModal;
