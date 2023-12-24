import { FC } from 'react'
import styles from './ShoppingListHistory.module.css'
export const ShoppingListHistory:FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_bar}>
        <h4 className={styles.header_text}>Shopping list history</h4>
      </div>
      <ul></ul>
    </div>
  )
}


