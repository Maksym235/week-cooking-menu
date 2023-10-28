import {PiCarrotBold, PiBowlFoodBold, PiCalendarBlankBold, PiHouseBold, PiGearSixBold} from 'react-icons/pi'
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Popover} from "antd";
export const SideBar = () => {
    const {pathname} = useLocation()

return (
<section className={styles.sideBar_section}>
    <div className={styles.conteiner}>
        <Popover content='Home'>
        <NavLink  className={pathname === '/' ? styles.current : styles.NavLinkSideBar} to='/'>
            <PiHouseBold color='var(--accentColor)' size={26}/>
        </NavLink>
        </Popover>
        <Popover content='Ingredients'>
        <NavLink  className={pathname === '/ingredients'  ? styles.current : styles.NavLinkSideBar} to='/ingredients'>
            <PiCarrotBold color='var(--accentColor)' size={26}/>
        </NavLink>
        </Popover>
        <Popover content='Dishes'>
        <NavLink  className={pathname === '/dishes' ? styles.current : styles.NavLinkSideBar} to='/dishes'>
            <PiBowlFoodBold color='var(--accentColor)' size={26}/>
        </NavLink>
        </Popover>
        <Popover content='Menu'>
        <NavLink  className={pathname === '/weekMenu'  ? styles.current : styles.NavLinkSideBar} to='/weekMenu'>
            <PiCalendarBlankBold color='var(--accentColor)' size={26}/>
        </NavLink>
        </Popover>
        <Popover content='Settings'>
        <NavLink className={pathname === '/*'  ? styles.current : styles.NavLinkSideBar} to='*'>
            <PiGearSixBold  color='var(--accentColor)' size={26}/>
        </NavLink>
        </Popover>
    </div>

</section>
)
}
