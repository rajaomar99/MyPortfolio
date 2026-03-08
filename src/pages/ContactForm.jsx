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
    <div className="contact-form-page">
      <div className="contact-form-header">
        <span className="section-tag">Contact</span>
        <h1>Send a <span>Message</span></h1>
      </div>

      <div className="contact-form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className='form-group'>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="name" placeholder="John Doe" required />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button className="submit-btn" type="submit">Send Message →</button>
          {error && (
            <div className="form-message error">Failed to send message. Please try again later.</div>
          )}
          {sent && (
            <div className="form-message success">Message received! I'll get back to you shortly.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

