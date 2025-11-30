import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hpqad18',
      'template_zqspdq6',
      form.current,
      'mqJyzUSQ5B-q2BhT4'
    ).then(
      (result) => {
        setSent(true);
        form.current.reset();
      },
      (error) => {
        setError(true);
      }
    );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className='contact-me'>Contact Me</div>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        {error && (
          <div>Failed to send message. Please try again later.</div>
        )}
        {sent && (
          <div>I've received your message and will be reaching out to you shortly.</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
