/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SocialLinksItem.css';

function SocialLinksItem({ name }) {
    return (
        <a>
            <i className={`bi bi-${name ? name : ''}`}></i>
        </a>
    );
};

export default SocialLinksItem;
