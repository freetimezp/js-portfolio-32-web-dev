import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <form className='mt-4 contactForm'>
            <div className="row">
                <div className="col-md-6 form-group">
                    <input type="text" name="fullname" className='form-control' id="name" placeholder='Your Name' />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                        type="email"
                        name="email" className='form-control' id="email" placeholder='Your Email' />
                </div>
            </div>
            <div className="form-group mt-3">
                <input
                    type="text"
                    name="subject" className='form-control' id="subject" placeholder='Subject' />
            </div>
            <div className="form-group mt-3">
                <textarea name="message" id="message" rows="6" className='form-control' placeholder='Message'></textarea>
            </div>
            <div className="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;
