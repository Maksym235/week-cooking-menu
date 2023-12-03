import {PiCarrotBold, PiBowlFoodBold, PiCalendarBlankBold, PiHouseBold, PiGearSixBold} from 'react-icons/pi'
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
// import {Popover} from "antd";
export const SideBar = () => {
    const {pathname} = useLocation()

return (
<section className={styles.sideBar_section}>
    <div className={styles.conteiner}>
        <div className={styles.titleConteiner}>
            <div className={styles.titleLogo}></div>
            <p className={styles.titleText}>WeekMenu</p>
        </div>

        <NavLink  className={pathname === '/' ? styles.current : styles.NavLinkSideBar} to='/'>
            <PiHouseBold color={pathname === '/' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Home</p>
        </NavLink>

        <NavLink  className={pathname === '/ingredients'  ? styles.current : styles.NavLinkSideBar} to='/ingredients'>
            <PiCarrotBold color={pathname === '/ingredients' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/ingredients' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Ingredients</p>
        </NavLink>

        <NavLink  className={pathname === '/dishes' ? styles.current : styles.NavLinkSideBar} to='/dishes'>
            <PiBowlFoodBold color={pathname === '/dishes' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/dishes' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Dishes</p>
        </NavLink>

        <NavLink  className={pathname === '/weekMenu'  ? styles.current : styles.NavLinkSideBar} to='/weekMenu'>
            <PiCalendarBlankBold color={pathname === '/weekMenu' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/weekMenu' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Menu</p>
        </NavLink>


        <NavLink className={pathname === '/*'  ? styles.current : styles.NavLinkSideBar} to='*'>
            <PiGearSixBold  color={pathname === '/*' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/*' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Settings</p>
        </NavLink>

    </div>

</section>
)
}
