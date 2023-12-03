import styles from './PageBar.module.css'

export const PageBar = ({title}: any) => {
return (
<div className={styles.conteiner}>
    <h2 className={styles.title}>{title}</h2>
    <label className={styles.label}>
        <input className={styles.input} placeholder={`Type here to search...`}/>
    </label>
</div>
)
}