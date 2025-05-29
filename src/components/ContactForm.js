    import React, { useRef } from 'react';
    import emailjs from 'emailjs-com';
    import './Footer.css';
    import bgImage from '../assets/bgg.jpg';


    function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_8haq0cb',
        'template_hlddkqw',
        form.current,
        'VNFikr6IFv-jutkOb'
        ).then(
        (result) => {
            alert("Message sent successfully!");
            form.current.reset();
        },
        (error) => {
            alert("Failed to send message. Try again later.");
        }
        );
    };

    return (
        <footer className="footer-form"  style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
        <div className="footer-content">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Contact Me</h2>
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" required />
            <input type="text" name="company" placeholder="Company Name" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send</button>
            </form>
            <div className="footer-image-container">
            
            </div>
        </div>
        </footer>
    );
    }

    export default ContactForm;
