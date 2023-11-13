import React from 'react';
import './About.css';

import profileImg from '../images/profile-img.jpg';

import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';

function About({ reference, aboutActive }) {
    return (
        <section id="about" className='about' ref={reference}>
            <div className="container about-me">
                <SectionTitle title="About" subTitle="Learn more about me" />
                <div className="row pt-4">
                    <div className="col-lg-4">
                        <img src={profileImg} alt="Me" className='img-fluid' />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>UI/UX &amp; Website Designer</h3>
                        <p className='fst-italic'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde ducimus quisquam ipsum assumenda nobis repellendus
                            dolorum necessitatibus, optio totam impedit.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Birthday:</strong> <span>1 May 2000</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Website:</strong> <span>www.website.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Phone:</strong> <span>+1 234 5678 90</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>City:</strong> <span>City Name, Ukraine</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Age:</strong> <span>23</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Degree:</strong> <span>Master</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Email:</strong> <span>mail@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Freelance:</strong> <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ea cum, nisi expedita quos accusantium optio consequuntur!
                            Laudantium quos, beatae consectetur perferendis at necessitatibus!
                            Optio quisquam neque nisi eaque cumque voluptates aspernatur vitae
                            itaque, quidem quibusdam nihil! Error aliquid vitae nemo excepturi!
                            Magni suscipit voluptate illo? Blanditiis expedita sunt iure debitis.
                        </p>
                    </div>
                </div>
            </div>

            <Counter active={aboutActive} />
        </section>
    );
};

export default About;
