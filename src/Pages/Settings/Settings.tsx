import { PageBar } from '../../Components/PageBar/PageBar';
import { SettingsBlock } from '../../Components/SettingsBlock/SettingsBlock';
import styles from './SettingsMenu.module.css';
import { useTranslation } from 'react-i18next';
export const Settings = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.main_container}>
      <PageBar title={t('Header.settings')} />
      <div className={styles.main_block}>
        <SettingsBlock />
        <button className={styles.logout_btn}>
          {t(`SettingsPage.logout`)}
        </button>
      </div>
    </main>
  );
};
