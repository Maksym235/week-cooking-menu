import styles from './DetailsInfoingredients.module.css'

export const DetailsInfoIngredients = ({item}: any) => {
return (
<div className={styles.conteiner}>
    <div className={styles.main_info_block}>
        <div className={styles.infoHeader}>
            <p className={styles.title}>Ingredients Description</p>
            <button className={styles.button}>Add to shopping list</button>
        </div>
        <div className={styles.infoConteiner}>
    <img className={styles.img}  src={item.img} alt={item.name}/>
        <div className={styles.textWrapper} >
        <h3 className={styles.text}>Name: <span className={styles.spanText}>{item.name}</span></h3>
        <p className={styles.text}>Category: <span className={styles.spanText}> shalala</span></p>
        <p className={styles.text}>Default:<span className={styles.spanText}>200gram</span> </p>
        <p className={styles.text}>Description: <span className={styles.spanDescription}>Ipsum amet vero accusam sit amet sanctus et et .</span> </p>
        </div>
        </div>
    </div>
</div>
)
}