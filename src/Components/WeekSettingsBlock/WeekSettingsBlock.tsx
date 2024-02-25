import styles from "./WeekSettingsBlock.module.css";
export const WeekSettingsBlock = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Create new list</button>
      <button className={styles.btn}>save this list</button>
    </div>
  );
};
