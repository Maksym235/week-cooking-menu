import {
  PiCarrotBold,
  PiBowlFoodBold,
  PiCalendarBlankBold,
  PiHouseBold,
  PiGearSixBold,
} from 'react-icons/pi';
// import { FaHistory } from 'react-icons/fa';
import styles from './SideBar.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '/public/logo.svg';
// import {Popover} from "antd";
export const SideBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentList, setCurrentList] = useState<string | null>(null);
  const { pathname } = useLocation();

  const ShowIngredientsListVariables = () => {
    setIsOpen((state) => !state);
  };

  const handleSetCurrentList = (list: string) => {
    setCurrentList(list);
  };

  const changePage = () => {
    setIsOpen(false);
    setCurrentList(null);
  };

  return (
    <section className={styles.sideBar_section}>
      <div className={styles.conteiner}>
        <div className={styles.titleConteiner}>
          <img src={logo} width={60} alt='logo' />
          {/* <div className={styles.titleLogo}></div> */}
          <p className={styles.titleText}>WeekMenu</p>
        </div>

        <NavLink
          onClick={changePage}
          className={pathname === '/' ? styles.current : styles.NavLinkSideBar}
          to='/'
        >
          <PiHouseBold
            color={
              pathname === '/' ? 'var(--accentColor)' : 'var(--silverColor)'
            }
            size={26}
          />
          <p
            className={
              pathname === '/'
                ? styles.NavLinksTextCurrent
                : styles.NavLinksText
            }
          >
            {t('Sidebar.home')}
          </p>
        </NavLink>

        {/*<NavLink  className={pathname === '/ingredients'  ? styles.current : styles.NavLinkSideBar} to='/ingredients'>*/}
        <div className={styles.ingredientsConteiner}>
          <NavLink
            to='/ingredients'
            className={styles.ingredientsTitle}
            onClick={ShowIngredientsListVariables}
          >
            <PiCarrotBold
              color={
                pathname === '/ingredients' && isOpen
                  ? 'var(--accentColor)'
                  : 'var(--silverColor)'
              }
              size={26}
            />
            <p
              className={
                pathname === '/ingredients' && isOpen
                  ? styles.NavLinksTextCurrent
                  : styles.NavLinksText
              }
            >
              {t(`Sidebar.ingredients`)}
            </p>
          </NavLink>
          {isOpen && (
            <div className={styles.subListConteiner}>
              <NavLink
                to='/ingredients?currentList=yourIngs'
                onClick={() => handleSetCurrentList('yourIngs')}
                className={
                  currentList === 'yourIngs'
                    ? styles.subListTextCurrent
                    : styles.subListText
                }
              >
                {t(`Sidebar.yourIngrediens`)}
              </NavLink>
              {/* <NavLink
								to="/ingredients?currentList=shoppingList"
								onClick={() => handleSetCurrentList("shoppingList")}
								className={
									currentList === "shoppingList"
										? styles.subListTextCurrent
										: styles.subListText
								}
							>
								{t(`Sidebar.shoppingList`)}
							</NavLink> */}
            </div>
          )}
        </div>
        {/*</NavLink>*/}

        <NavLink
          onClick={changePage}
          className={
            pathname === '/dishes' ? styles.current : styles.NavLinkSideBar
          }
          to='/dishes'
        >
          <PiBowlFoodBold
            color={
              pathname === '/dishes'
                ? 'var(--accentColor)'
                : 'var(--silverColor)'
            }
            size={26}
          />
          <p
            className={
              pathname === '/dishes'
                ? styles.NavLinksTextCurrent
                : styles.NavLinksText
            }
          >
            {t(`Sidebar.dishes`)}
          </p>
        </NavLink>

        <NavLink
          onClick={changePage}
          className={
            pathname === '/weekMenu' ? styles.current : styles.NavLinkSideBar
          }
          to='/weekMenu'
        >
          <PiCalendarBlankBold
            color={
              pathname === '/weekMenu'
                ? 'var(--accentColor)'
                : 'var(--silverColor)'
            }
            size={26}
          />
          <p
            className={
              pathname === '/weekMenu'
                ? styles.NavLinksTextCurrent
                : styles.NavLinksText
            }
          >
            {t('Sidebar.menu')}
          </p>
        </NavLink>

        {/* <NavLink
          onClick={changePage}
          className={
            pathname === '/history' ? styles.current : styles.NavLinkSideBar
          }
          to='/history'
        >
          <FaHistory
            color={
              pathname === '/history'
                ? 'var(--accentColor)'
                : 'var(--silverColor)'
            }
            size={26}
          />
          <p
            className={
              pathname === '/history'
                ? styles.NavLinksTextCurrent
                : styles.NavLinksText
            }
          >
            {t(`History.history`)}
          </p>
        </NavLink> */}

        <NavLink
          onClick={changePage}
          className={
            pathname === '/settingsUser'
              ? styles.current
              : styles.NavLinkSideBar
          }
          to='/settingsUser'
        >
          <PiGearSixBold
            color={
              pathname === '/settingsUser'
                ? 'var(--accentColor)'
                : 'var(--silverColor)'
            }
            size={26}
          />
          <p
            className={
              pathname === '/settingsUser'
                ? styles.NavLinksTextCurrent
                : styles.NavLinksText
            }
          >
            {t(`Sidebar.settings`)}
          </p>
        </NavLink>
      </div>
    </section>
  );
};
