import { useEffect } from 'react';
import { HomeNavigationMenu } from '../../Components/HomeNavigationMenu/HomeNavigationMenu';
import { WellcomeText } from '../../Components/WellcomeText/WellcomeText';
import styles from './Auth.module.css';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('token') && navigate('/weekMenu');
  }, []);
  return (
    <div className={styles.container}>
      <WellcomeText />
      <HomeNavigationMenu />
    </div>
  );
};

export default Auth;
