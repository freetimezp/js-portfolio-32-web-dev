import React, { useState } from 'react';
import './Services.css';

import servicesData from '../data/servicesData';
import SectionTitle from '../components/SectionTitle';
import ServicesItem from '../components/ServicesItem';

function Services({ reference }) {
    const [services, setServices] = useState(servicesData);

    return (
        <section id="services" className='services' ref={reference}>
            <div className="container">
                <SectionTitle title="Services" subTitle="My Services" />
                <div className="row">
                    {services.map(service => (
                        <ServicesItem key={service._id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
