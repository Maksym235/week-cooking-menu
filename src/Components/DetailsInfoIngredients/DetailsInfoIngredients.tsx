import styles from './DetailsInfoingredients.module.css'

export const DetailsInfoIngredients = ({item}: any) => {
return (
<div className={styles.conteiner}>
    <div className={styles.main_info_block}>
    <img style={{borderRadius: '24px'}} width={200} height={200} src={item.img} alt={item.name}/>
        <div className={styles.textWrapper} >
        <h3 className={styles.title}>Title: {item.name}</h3>
        <p className={styles.text}>Category: shalala</p>
        <p className={styles.text}>Default: </p>
        </div>
    </div>
    <div className={styles.descWrapper}>
        <p className={styles.text}>Description:</p>
    </div>
</div>
)
}