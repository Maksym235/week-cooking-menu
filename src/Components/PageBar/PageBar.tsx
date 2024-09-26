import styles from './PageBar.module.css';

import { Toggler } from '../Header/Toggler/Toggler';
import { LanguageToggler } from './LanguageToggler/LanguageToggler';
import { useState } from 'react';

export const PageBar = ({ title }: { title: string }) => {
  const [isLight, setIsLight] = useState<string>(
    document.documentElement.dataset.theme!
  );

  const handleChangeTheme = (isLight: boolean) => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    setIsLight(
      (document.documentElement.dataset.theme = isLight ? 'light' : 'dark')
    );
  };
  return (
    <div className={styles.conteiner}>
      <h2 className={styles.title}>{title}</h2>
      {/* <label className={styles.label}>
        <input className={styles.input} placeholder={`Type here to search...`}/>
    </label> */}
      <div className={styles.select_options}>
        <Toggler
          isChecked={isLight === 'light' ? true : false}
          toggleTheme={handleChangeTheme}
        />
        {/* <Select options={themeOptions} /> */}
        <LanguageToggler />
      </div>
    </div>
  );
};
