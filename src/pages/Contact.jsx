import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const contactItems = [
  { label: "Email", value: "rajamuhammadomar5@gmail.com", href: "mailto:rajamuhammadomar5@gmail.com", icon: "✉️" },
  { label: "GitHub", value: "rajaomar99", href: "https://github.com/rajaomar99", icon: "🐙" },
  { label: "LinkedIn", value: "rajaomar-dev", href: "https://pk.linkedin.com/in/rajaomar-dev", icon: "💼" },
  { label: "WhatsApp", value: "+92 310 4134562", href: "https://wa.me/923104134562", icon: "💬" },
  { label: "Instagram", value: "_rajaomar", href: "https://instagram.com/_rajaomar", icon: "📸" },
  { label: "Fiverr", value: "rajaomar5", href: "", icon: "🟢" },
];

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact-header'>
        <span className='section-tag'>Get In Touch</span>
        <h1>Let's <span>Work Together</span></h1>
        <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
      </div>

      <div className='contact-grid'>
        <div className='contact-info-col'>
          {contactItems.map((item) => (
            <a
              key={item.label}
              className='contact-item'
              href={item.href || '#'}
              target={item.href && !item.href.startsWith('mailto') ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              <span className='contact-item-icon'>{item.icon}</span>
              <div className='contact-item-text'>
                <span className='contact-item-label'>{item.label}</span>
                <span className='contact-item-value'>{item.value}</span>
              </div>
              <span className='contact-item-arrow'>↗</span>
            </a>
          ))}
        </div>

        <div className='contact-cta-col'>
          <div className='cta-card'>
            <div className='cta-card-icon'>🚀</div>
            <h2>Ready to start a project?</h2>
            <p>
              Drop me a message through the form and I'll get back to you within 24 hours.
            </p>
            <Link to="/ContactForm" style={{ textDecoration: 'none' }}>
              <button className='cta-btn'>Send a Message</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

