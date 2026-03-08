import React from 'react'
import './Home.css'
import displaypic from "../assets/displaypic.jpg";
import { Link } from 'react-router-dom';
import { iconsInfo} from '../data/icons';

const Home = () => {

  return (
    <main className="main">
      <div className="texts">
        <div className="greeting-badge">
          <span className="dot"></span>
          Available for new projects
        </div>

        <div className="hero-headline">
          <span className="line-normal">Hi, I'm Omar</span>
          <span className="line-accent">Full Stack Dev.</span>
        </div>

        <p className="hero-sub">
          I craft fast, scalable web experiences — from polished frontends to robust backends.
          Passionate about clean code, great UX, and the AI-powered future.
        </p>

        <div className='buttons'>
          {iconsInfo.map((icon, index) => (
            <a className='social-icon-btn' key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              <img src={icon.icon} alt='icon' />
            </a>
          ))}
        </div>

        <div className="works">
          <Link to="/Projects" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">View My Work</button>
          </Link>
        </div>
      </div>

      <div className="photo">
        <div className="photo-wrapper">
          <div className="photo-bg-ring"></div>
          <div className="photo-bg-glow"></div>
          <img src={displaypic} alt="dp" />
        </div>
      </div>
    </main>
  )
}

export default Home;

