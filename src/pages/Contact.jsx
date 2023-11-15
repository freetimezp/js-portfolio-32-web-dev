/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Contact.css';

import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

function Contact({ reference }) {
    return (
        <section id="contact" className='contact' ref={reference}>
            <div className="container">
                <SectionTitle title="Contact" subTitle="Contact Me" />

                <div className="row mt-2">
                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-map mt-2"></i>
                            <h3>My Address</h3>
                            <p>Street Name, City, Country</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-share-alt mt-2"></i>
                            <h3>Social Profiles</h3>
                            <div className="social-links">
                                <a href="#" className="twitter-x">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="skype">
                                    <i className="bi bi-skype"></i>
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-envelope mt-2"></i>
                            <h3>Email Me</h3>
                            <p>mail@email.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-phone-call mt-2"></i>
                            <h3>Call Me</h3>
                            <p>+1 23 3456 7890</p>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
