import React from 'react';
import './Resume.css';

import SectionTitle from '../components/SectionTitle';

function Resume({ reference }) {
    return (
        <section id="resume" className='resume' ref={reference}>
            <div className="container">
                <SectionTitle title='Resume' subTitle="Check My Resume" />

                <div className='row'>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Ashley Baker</h4>
                            <p>
                                <em>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptate, dolor. Et sunt cum iusto doloribus commodi accusamus
                                    voluptas, iure labore aut reiciendis suscipit velit repellendus.
                                </em>
                            </p>
                            <ul>
                                <li>Street Name, City Name, State, 00000</li>
                                <li>(00) 1234 5678</li>
                                <li>mail@gmail.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className='resume-item'>
                            <h4>Master of Fine Arts &amp; Graphic Design</h4>
                            <h5>2015 - 2016</h5>
                            <p>
                                <em>Example Institute, City, Nation</em>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem nisi doloribus magni quisquam ab doloremque
                                error explicabo quibusdam, aspernatur minus quasi, vitae
                                voluptatem voluptates reiciendis assumenda repellat, reprehenderit
                                excepturi. Est numquam esse aliquid reprehenderit praesentium.
                            </p>
                        </div>
                        <div className='resume-item'>
                            <h4>Bachelor of Information Technology</h4>
                            <h5>2010 - 2014</h5>
                            <p>
                                <em>Example Institute, City, Nation</em>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem nisi doloribus magni quisquam ab doloremque
                                error explicabo quibusdam, aspernatur minus quasi, vitae
                                voluptatem voluptates reiciendis assumenda.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className='resume-item'>
                            <h4>Senior website designer</h4>
                            <h5>2019 - Present</h5>
                            <p>
                                <em>Company Name, City, Nation</em>
                            </p>
                            <ul>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam dolor sit amet consectetur
                                    dolor sit amet consectetur.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam dolor sit amet consectetur
                                    dolor sit amet consectetur dolor sit amet consectetur
                                    dolor sit amet consectetur.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam.
                                </li>
                            </ul>
                        </div>
                        <div className='resume-item'>
                            <h4>Graphic design specialist</h4>
                            <h5>2017 - 2018</h5>
                            <p>
                                <em>Example Company, City, Nation</em>
                            </p>
                            <ul>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam dolor sit amet consectetur .
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam dolor sit amet consectetur
                                    dolor sit amet consectetur .
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Molestias, quam.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
