import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar.tsx';
import styles from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <div className={styles.conteiner}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};
