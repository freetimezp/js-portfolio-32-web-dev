import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const initialState = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        result: '',
    };

    const [text, setText] = useState(initialState);

    const changeText = (e) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, result: '' });
        //console.log(text);
    };

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (text.fullname === '' || text.message === '' || text.email === '' || text.subject === '') {
            setText({ ...text, result: 'incomplete' })
        }
    };

    return (
        <form className='mt-4 contactForm' onSubmit={handleSubmitMessage}>
            <div className="row">
                <div className="col-md-6 form-group">
                    <input
                        type="text" onChange={changeText} value={text.fullname}
                        name="fullname" className='form-control' id="name" placeholder='Your Name' />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                        type="email" onChange={changeText} value={text.email}
                        name="email" className='form-control' id="email" placeholder='Your Email' />
                </div>
            </div>
            <div className="form-group mt-3">
                <input
                    type="text" onChange={changeText} value={text.subject}
                    name="subject" className='form-control' id="subject" placeholder='Subject' />
            </div>
            <div className="form-group mt-3">
                <textarea onChange={changeText} value={text.message}
                    name="message" id="message" rows="6" className='form-control' placeholder='Message'></textarea>
            </div>
            {text.result === 'incomplete' && (
                <div className='error-message'>Please,  fill all fields in form..</div>
            )}
            <div className="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;
