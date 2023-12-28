// import {NavLink} from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from "./HomeNavigationMenu.module.css";
export const HomeNavigationMenu = () => {
  return (
    <section>
      <div className={styles.conteiner}>
        <LoginForm />
      </div>
    </section>
  );
};
