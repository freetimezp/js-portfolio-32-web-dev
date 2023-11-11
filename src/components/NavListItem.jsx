/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './NavListItem.css';

function NavListItem({ item }) {
    return (
        <li>
            <a href="" className='nav-link'>
                {item.name}
            </a>
        </li>
    );
};

export default NavListItem;
