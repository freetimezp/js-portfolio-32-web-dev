/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Header.css';

import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function Header() {
    const [navList, setNavList] = useState(navListData);

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
                            <NavListItem key={item._id} item={item} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
