import styles from "./LoginForm.module.css";
import { useMutation, gql } from "@apollo/client";
const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      name
      email
      password
      token
    }
  }
`;
export const LoginForm = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  console.log(loading);
  console.log(data);
  console.log(error);

  const handleSubmitform = (evt: any) => {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    login({ variables: { email: email, password: password } });
    !loading && localStorage.setItem("token", data.login.token);
  };
  return (
    <>
      <form onSubmit={handleSubmitform} className={styles.form}>
        <label>
          email
          <input name="email" type="email" />
        </label>
        <label>
          password
          <input name="password" type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {loading && <div>Loading...</div>}
    </>
  );
};
