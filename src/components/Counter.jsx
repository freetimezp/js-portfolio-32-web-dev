import React, { useState } from 'react';
import './Counter.css';

import counterData from '../data/counterData';
import CounterItem from './CounterItem';

function Counter({ active }) {
    const [counters, setCounters] = useState(counterData);

    return (
        <div className='container counts'>
            <div className="row">
                {active && counters.map(counter => (
                    <CounterItem item={counter} key={counter._id} />
                ))}
            </div>
        </div>
    );
};

export default Counter;