import {PiCarrotBold, PiBowlFoodBold, PiCalendarBlankBold, PiHouseBold, PiGearSixBold} from 'react-icons/pi'
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState} from "react";
// import {Popover} from "antd";
export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentList, setCurrentList] = useState<string | null>(null )
    const {pathname} = useLocation()

    const ShowIngredientsListVariables = () => {
        setIsOpen(state => !state)
    }


    const handleSetCurrentList = (list: string) => {
        setCurrentList(list)

    }

    const changePage = () => {
        setIsOpen(false)
        setCurrentList(null)
    }

return (
<section className={styles.sideBar_section}>
    <div className={styles.conteiner}>
        <div className={styles.titleConteiner}>
            <div className={styles.titleLogo}></div>
            <p className={styles.titleText}>WeekMenu</p>
        </div>

        <NavLink onClick={changePage}  className={pathname === '/' ? styles.current : styles.NavLinkSideBar} to='/'>
            <PiHouseBold color={pathname === '/' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Home</p>
        </NavLink>

        {/*<NavLink  className={pathname === '/ingredients'  ? styles.current : styles.NavLinkSideBar} to='/ingredients'>*/}
        <div className={styles.ingredientsConteiner}>
            <NavLink to='/ingredients' className={styles.ingredientsTitle} onClick={ShowIngredientsListVariables}>
        <PiCarrotBold color={pathname === '/ingredients'&& isOpen ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/ingredients' && isOpen ? styles.NavLinksTextCurrent : styles.NavLinksText}>Ingredients</p>
            </NavLink>
            {isOpen && <div className={styles.subListConteiner}>
            <NavLink to='/ingredients?currentList=yourIngs' onClick={() => handleSetCurrentList('yourIngs')} className={currentList === 'yourIngs' ? styles.subListTextCurrent : styles.subListText}>Your Ingredients</NavLink>
            <NavLink to='/ingredients?currentList=shoppingList' onClick={() => handleSetCurrentList('shoppingList')} className={currentList === 'shoppingList' ? styles.subListTextCurrent : styles.subListText}>Shopping List</NavLink>
            </div>
            }
        </div>
            {/*</NavLink>*/}

        <NavLink onClick={changePage}  className={pathname === '/dishes' ? styles.current : styles.NavLinkSideBar} to='/dishes'>
            <PiBowlFoodBold color={pathname === '/dishes' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/dishes' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Dishes</p>
        </NavLink>

        <NavLink onClick={changePage}  className={pathname === '/weekMenu'  ? styles.current : styles.NavLinkSideBar} to='/weekMenu'>
            <PiCalendarBlankBold color={pathname === '/weekMenu' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/weekMenu' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Menu</p>
        </NavLink>


        <NavLink onClick={changePage} className={pathname === '/*'  ? styles.current : styles.NavLinkSideBar} to='*'>
            <PiGearSixBold  color={pathname === '/*' ? 'var(--accentColor)' : 'var(--silverColor)'} size={26}/>
            <p className={pathname === '/*' ? styles.NavLinksTextCurrent : styles.NavLinksText}>Settings</p>
        </NavLink>

    </div>

</section>
)
}
