import styles from './DishesIngredients.module.css'

export const DishesIngredients = () => {
return (
<div className={styles.conteiner}>
    <div className={styles.headerCard}>
        <p>Dishes Details</p>
        <button>Edit Details</button>
    </div>
    <div className={styles.detailsConteiner}>
      {/*<img src={} alt={''} className={styles.img}/>*/}
        <div className={styles.textConteiner}>
      <div className={styles.NameConteiner}>
          <p>Name</p>
          <p></p>
      </div>
        <div className={styles.CategoryConteiner}>
          <p>Category</p>
          <p></p>
      </div>
        </div>
    </div>
</div>
)
}