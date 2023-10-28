import {NavLink} from "react-router-dom";
import styles from './HomeNavigationMenu.module.css'
export const HomeNavigationMenu = () => {
return (
<section>
    <div className={styles.conteiner}>
        <NavLink className={styles.navLinkBtn} to='/ingredients'>
            Ingredients
        </NavLink>
        <NavLink className={styles.navLinkBtn} to='/dishes'>
            Dishes
        </NavLink>
        <NavLink className={styles.navLinkBtn} to='weekMenu'>
            Menu
        </NavLink>
    </div>
</section>
)
}