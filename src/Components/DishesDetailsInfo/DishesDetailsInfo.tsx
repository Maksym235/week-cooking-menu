
import styles from './DishesDetailsInfo.module.css'

export const DishesDetailsInfo = () => {
    const categoryData = ['Lunch', "Dinner", "breakfast"]
    return (
        <div className={styles.conteiner}>
            <div className={styles.headerCard}>
                <p>Dishes Details</p>
                <button className={styles.headerBtn}>Edit Details</button>
            </div>
            <div className={styles.detailsConteiner}>
                <img src='https://loremflickr.com/640/480/food' alt='img' className={styles.img}/>
                <div className={styles.textConteiner}>
                    <div className={styles.NameConteiner}>
                        <p className={styles.label}>Name:</p>
                        <p>Karbonara</p>
                    </div>
                    <div className={styles.CategoryConteiner}>
                        <p className={styles.label}>Category:</p>
                        <ul className={styles.categoryList}>
                        {categoryData.map(item => <li className={styles.categoryValue}>{item}</li>)}
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}