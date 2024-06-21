import React, { useRef } from "react";
import './contact.css';
import Twitter from '../../images/twitter.png';
import LinkedIn from '../../images/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xzhzv4s', 'template_6kz0l24', form.current,{publicKey: 'EWlAAdw5Cu-y8aF_d',})
        .then(() => {
              console.log('SUCCESS!');
            },(error) => {
              console.log('FAILED...', error.text);
            });
    };
    return(
        <div id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work oppportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button className="submitBtn" type="submit" value='Send'>Submit</button>
                <div className="links">
                    <img src={Twitter} alt="twitter" className="link" />
                    <img src={LinkedIn} alt="linkedin" className="link" />
                    
                </div>
            </form>
        </div>
    );
}

export default Contact;