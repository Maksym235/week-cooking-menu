import styles from "./AddIngredientModal.module.css";
import { useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";

const ADD_INGREDIENT = gql`
  mutation CreateIngredient(
    $name: String!
    $category: String
    $defaultValue: Int
    $description: String
  ) {
    createIngredient(
      name: $name
      category: $category
      defaultValue: $defaultValue
      description: $description
    ) {
      id
      category
      defaultValue
      name
      description
    }
  }
`;

export const AddIngredientModal = ({ toggleIsOpen, refetchData }: any) => {
  const [createIngredient, { data, loading, error }] =
    useMutation(ADD_INGREDIENT);
  const { register, handleSubmit } = useForm();
  const submitForm = (data: any) => {
    createIngredient({
      variables: {
        name: data.name,
        category: data.category ? data.category : "",
        defaultValue: data.defaultValue ? Number(data.defaultValue) : "",
        description: data.description ? data.description : "",
      },
    });
  };
  if (data) {
    toggleIsOpen();
    refetchData();
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
      <input {...register("name")} placeholder="name" />
      <input {...register("category")} placeholder="category" />
      <input
        type="number"
        {...register("defaultValue")}
        placeholder="defaultValue"
      />
      <input {...register("description")} placeholder="description" />

      <p>{data}</p>
      <input type="submit" />
    </form>
  );
};
