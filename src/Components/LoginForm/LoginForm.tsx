import styles from "./LoginForm.module.css";
import { useMutation, gql } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
export const LoginForm = ({ form }: { form: string }) => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  // const notify = () => {
  //   toast.error("🦄 Wow so easy!", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  const handleSubmitform = (evt: any) => {
    evt.preventDefault();
    console.log(evt.currentTarget.elements.email);
    // const name = evt.currentTarget.elements.name.value;
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    login({ variables: { email: email, password: password } });
  };
  if (data && !loading) {
    localStorage.setItem("token", data.login.token);
  }

  if (error) {
    console.log(error);
    toast.error(`${error.message}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  // if (!loading && !error ) {
  //   toast.success("Login successful", {
  //     position: "top-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }
  return (
    <>
      <form onSubmit={handleSubmitform} className={styles.form}>
        {form === "register" && (
          <label className={styles.label}>
            name
            <input
              placeholder="enter your name"
              className={styles.input}
              name="name"
              type="text"
            />
          </label>
        )}
        <label className={styles.label}>
          email
          <input
            placeholder="enter your email"
            className={styles.input}
            name="email"
            type="email"
          />
        </label>
        <label className={styles.label}>
          password
          <input
            placeholder="enter your password"
            className={styles.input}
            name="password"
            type="password"
          />
        </label>
        <button className={styles.button} type="submit">
          <span>Submit</span>
        </button>
      </form>
      {loading && <div>Loading...</div>}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
