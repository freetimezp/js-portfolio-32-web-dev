import React, { useState, useEffect } from 'react';
import './Portfolio.css';

import filterListData from '../data/filterListData';
import SectionTitle from '../components/SectionTitle';
import PortfolioItem from '../components/PortfolioItem';

function Portfolio({ reference }) {
    const [portfolio, setPortfolio] = useState([]);
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState(filterListData);

    const fetchData = () => {
        fetch('http://localhost:3000/api/portfolioData.json')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setPortfolio(data);
            })
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setData(portfolio);
    }, [portfolio]);

    return (
        <section id="portfolio" className='portfolio' ref={reference}>
            <div className="container">
                <SectionTitle title="Portfolio" subTitle="My Works" />
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-filters">
                            {
                                filters.map(filter => (
                                    <li key={filter._id}>
                                        {filter.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    {data && data.length > 0 && data.map(item => (
                        <PortfolioItem key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
