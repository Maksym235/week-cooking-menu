// import React from "react";
import styles from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={styles.backdrop}>
      {/* <div className={styles.container}> */}
      <div className={styles.loader}></div>
      {/* </div> */}
    </div>
  );
};
