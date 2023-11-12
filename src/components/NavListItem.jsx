/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './NavListItem.css';

function NavListItem({ item, navOnClick }) {
    return (
        <li>
            <a className={`nav-link ${item.active ? 'active' : ''}`} onClick={() => navOnClick(item._id, item.target)}>
                {item.name}
            </a>
        </li>
    );
};

export default NavListItem;
