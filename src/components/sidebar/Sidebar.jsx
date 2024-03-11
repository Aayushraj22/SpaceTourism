import React from 'react'
import { useLocation } from 'react-router-dom';

import './sidebar.css'
import close from '../../assets/shared/icon-close.svg';


function Sidebar({handleOpenSidebar}) {

    const linksList = ['/', 'destination', 'crew', 'technology'];
    const {pathname} = useLocation();
    const path = pathname.length > 1 ? pathname.slice(1) : pathname;

    return (
        <div className='mobile-sidebar' >
            <div className='icon-container' >
                <img src={close} alt="close"  onClick={handleOpenSidebar}/>
            </div>

            <ul className="links">
                {linksList.map((link, index) => <li key={link === '/' ? 'home' : link}><a href={link} className={path === link ? 'isActive' : ''} ><b>0{index} </b>{link === '/' ? 'home' : link}</a> </li>)}
            </ul>

        </div>
    )
}

export default Sidebar