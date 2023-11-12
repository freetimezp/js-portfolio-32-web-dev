import React from 'react';
import './SectionTitle.css';

function SectionTitle({ title, subTitle }) {
    return (
        <div className='section-title'>
            <h2>
                {title}
            </h2>
            <p>
                {subTitle}
            </p>
        </div>
    );
};

export default SectionTitle;
