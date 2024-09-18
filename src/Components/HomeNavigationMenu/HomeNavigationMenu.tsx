// import {NavLink} from "react-router-dom";
import { useState } from 'react';
import { AuthRadioButtons } from '../AuthRadioButtons/AuthRadioButtons';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './HomeNavigationMenu.module.css';
export const HomeNavigationMenu = () => {
  const [currentForm, setCurrentForm] = useState('login');
  return (
    <section>
      <div className={styles.conteiner}>
        <AuthRadioButtons changeForm={setCurrentForm} />
        <LoginForm form={currentForm} />
      </div>
    </section>
  );
};
