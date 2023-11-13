import React, { useState } from 'react';
import './Interests.css';

import interestsData from '../data/interestsData';
import InterestsItem from './InterestsItem';

function Interests() {
    const [interests, setInterests] = useState(interestsData);

    return (
        <div className='container interests'>
            <div className="section-title">
                <h2>Interests</h2>
            </div>
            <div className="row">
                {interests.map(interest => (
                    <InterestsItem key={interest._id} interest={interest} />
                ))}
            </div>
        </div>
    );
};

export default Interests;
