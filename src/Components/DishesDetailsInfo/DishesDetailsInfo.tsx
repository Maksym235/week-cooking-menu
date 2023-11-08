import styles from './DishesDetailsInfo.module.css'
export const DishesDetailsInfo = () => {
return (
<div className={styles.conteiner}>
    <div className={styles.main_info_block}>
    <img className={styles.img} width={200} height={200} src='https://loremflickr.com/640/480/food' alt='Dish img'/>
        <div className={styles.textBlock}>
    <div className={styles.nameBlock}>
        <h3>Name: Carbonara</h3>
        <p>Category: lanch dinner</p>
    </div>
    <div className={styles.ingredientsBlock}>
        <p className={styles.ingredientsTitle}>Ingredients:</p>
        <ul className={styles.ingredientsList}>

            <li className={styles.ingredientsItem}>
                <p>name: Pasta</p>
                <p>count: 200gram</p>
                <p>desc:</p>
            </li>
            <li className={styles.ingredientsItem}>
                <p>name: Cheese</p>
                <p>count: 150gram</p>
                <p>desc: Parmesan</p>
            </li>
            <li className={styles.ingredientsItem}>
                <p>name: Beckon</p>
                <p>count: 100gram</p>
                <p>desc:</p>
            </li>
        </ul>
    </div>
        </div>
    </div>
</div>
)
}