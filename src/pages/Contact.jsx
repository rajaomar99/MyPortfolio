import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact-box'>
      <div className='reach-out'>Reach Out To Me</div>
      <div>Email: rajamuhammadomar5@gmail.com</div>
      <div>Instagram: _rajaomar</div>
      <div>X: _rajaomar</div>
      <div>Github: rajaomar99</div>
      <div>Fiverr: rajaomar5</div>
      <div>Whatsapp: +92 3104134562</div>
      <Link to="/ContactForm">
        <button>Let's Talk</button>
      </Link>
    </div>
  )
}

export default Contact
