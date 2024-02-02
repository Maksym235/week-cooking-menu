import styles from "./WellcomeMessage.module.css";

export const WellcomeMessage = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  return (
    <div className={styles.container}>
      <h2>Wellcome,</h2>
      <p>{user.name}</p>
    </div>
  );
};
