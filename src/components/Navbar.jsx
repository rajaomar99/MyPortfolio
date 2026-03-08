import {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>

      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>

      <div className={`navbar nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="box" onClick={() => setIsOpen(false)}>Home</div>
        </Link>
        <Link to="/Projects" style={{ textDecoration: 'none' }}>
          <div className="box" onClick={() => setIsOpen(false)}>Projects</div>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <div className="box" onClick={() => setIsOpen(false)}>Contact</div>
        </Link>
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <div className="box" onClick={() => setIsOpen(false)}>About</div>
        </Link>
        <div className="box lets-talk-but">
          <Link to="/ContactForm">
            <button onClick={() => setIsOpen(false)}>Let's Talk</button>
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;
