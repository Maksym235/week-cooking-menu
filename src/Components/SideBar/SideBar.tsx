import {PiCarrotBold, PiBowlFoodBold, PiCalendarBlankBold, PiHouseBold, PiGearSixBold} from 'react-icons/pi'
import './sidebar.scss'
import {NavLink} from "react-router-dom";
import {Popover} from "react-tiny-popover";
import {useLocation} from "react-router-dom";
import {useState} from "react";

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState('')
    const {pathname} = useLocation()
    const onMouseEntryToLink = (value: string) => {
        setIsOpen(value)
    }
    const onMouseLeaveFromLink = () => {
        setIsOpen('')
    }
return (
<section className='sideBar_section'>

    <div className='conteiner'>
        <Popover
            isOpen={isOpen === '/'}
            positions={['right']} // preferred positions by priority
            content={<div>Hi! I'm popover content.</div>}
        >
        <NavLink onMouseEnter={() => onMouseEntryToLink('/')}  onMouseLeave={onMouseLeaveFromLink} className={pathname === '/' ? 'NavLinkSideBar current' :'NavLinkSideBar'} to='/'>
            <PiHouseBold color='#f55951' size={26}/>
        </NavLink>
    </Popover>
        <Popover
            isOpen={isOpen === '/ingredients'}
            positions={['right']} // preferred positions by priority
            content={<div>Hi! I'm popover co.</div>}
        >
        <NavLink  onMouseEnter={() => onMouseEntryToLink('/')} onMouseLeave={onMouseLeaveFromLink} className={pathname === '/ingredients'  ? 'NavLinkSideBar current' :'NavLinkSideBar'} to='/ingredients'>
            <PiCarrotBold color='#f55951' size={26}/>
        </NavLink>
        </Popover>
            <Popover
                isOpen={isOpen === 'dishes'}
                positions={['right']} // preferred positions by priority
                content={<div>Hi! I'm ver content.</div>}
            >
        <NavLink  onMouseEnter={() => onMouseEntryToLink('/')} onMouseLeave={onMouseLeaveFromLink} className={pathname === '/dishes' ? 'NavLinkSideBar current' :'NavLinkSideBar' } to='/dishes'>
            <PiBowlFoodBold color='#f55951' size={26}/>
        </NavLink>
            </Popover>
                <Popover
                    isOpen={isOpen === 'weekmenu'}
                    positions={['right']} // preferred positions by priority
                    content={<div>Him popover content.</div>}
                >
        <NavLink  onMouseEnter={() => onMouseEntryToLink('/')} onMouseLeave={onMouseLeaveFromLink} className={pathname === '/weekMenu'  ? 'NavLinkSideBar current' :'NavLinkSideBar'} to='/weekMenu'>
            <PiCalendarBlankBold color='#f55951' size={26}/>
        </NavLink>
                </Popover>
                    <Popover
                        isOpen={isOpen === 'user'}
                        positions={['right']} // preferred positions by priority
                        content={<div> popover content.</div>}
                    >
            <PiGearSixBold  onMouseEnter={() => onMouseEntryToLink('/')} onMouseLeave={onMouseLeaveFromLink} color='#f55951' size={26}/>
                    </Popover>
    </div>

</section>
)
}
