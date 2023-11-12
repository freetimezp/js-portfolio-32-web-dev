/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Header.css';

import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function Header() {
    const [navList, setNavList] = useState(navListData);

    const handleNavOnClick = (id) => {
        //console.log(id);

        const newNavList = navList.map(nav => {
            nav.active = false;
            if (nav._id === id) {
                nav.active = true;
            }

            return nav;
        });

        setNavList(newNavList);
    };

    return (
        <header id="header">
            <div className="container">
                <h1>
                    <a href="/">Ashley Beyker</a>
                </h1>
                <h2>
                    I'm professional <span>website designer</span> from Ukraine
                </h2>
                <nav id="navbar" className='navbar'>
                    <ul>
                        {navList.map(item => (
                            <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;