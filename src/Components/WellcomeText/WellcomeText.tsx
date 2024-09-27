import styles from './WellcomeText.module.css';
export const WellcomeText = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Вітаємо на <span className={styles.brand_name}>WeekMenu</span> — Твій
        Персональний Помічник у Плануванні Меню!
      </h1>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Тут ви зможете легко та швидко створювати смачні та збалансовані
          страви для щоденного меню!
        </p>

        <p className={styles.list_title}>З нашою платформою ви зможете:</p>
        <ul className={styles.list_advantages}>
          <li className={styles.list_item}>Створювати унікальні рецепти.</li>
          <li className={styles.list_item}>
            Легко планувати меню на тиждень і налаштовувати його під себе.
          </li>
          <li className={styles.list_item}>
            Отримувати автоматичні списки покупок на основі обраних страв.
          </li>
          <li className={styles.list_item}>
            Заощаджувати час на приготування та насолоджуватися смачними
            стравами кожного дня.
          </li>
        </ul>
        <p className={styles.text}>
          Приєднуйтесь до нашої спільноти кулінарних ентузіастів та відкривайте
          нові смаки разом з <span className={styles.brand_name}>WeekMenu</span>{' '}
          Плануйте з легкістю, готуйте з радістю!
        </p>
      </div>
    </div>
  );
};
