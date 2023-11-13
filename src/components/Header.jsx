/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Header.css';

import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import SocialLinksItem from './SocialLinksItem';

function Header({ reference, sectionActive, aboutActive }) {
    const [navList, setNavList] = useState(navListData);
    const [header, setHeader] = useState(false);

    const handleNavOnClick = (id, target) => {
        //console.log(id);
        if (target === 'header') {
            setHeader(false);
        } else {
            setHeader(true);
        }

        if (target === 'about') {
            aboutActive(true);
        } else {
            aboutActive(false);
        }

        const newNavList = navList.map(nav => {
            nav.active = false;
            if (nav._id === id) {
                nav.active = true;
            }

            return nav;
        });

        setNavList(newNavList);
        sectionActive(target);
    };

    return (
        <header id="header" ref={reference} className={`${header ? 'header-top' : ''}`}>
            <div className="container">
                <h1>
                    <a href="/">Ashley Baker</a>
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
                <div className="social-links">
                    <SocialLinksItem name="twitter-x" />
                    <SocialLinksItem name="facebook" />
                    <SocialLinksItem name="instagram" />
                    <SocialLinksItem name="youtube" />
                </div>
            </div>
        </header>
    );
};

export default Header;
