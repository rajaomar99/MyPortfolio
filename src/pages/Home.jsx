import React from 'react'
import './Home.css'
import displaypic from "../assets/displaypic.jpg";
import { Link } from 'react-router-dom';
import { iconsInfo} from '../data/icons';

const Home = () => {

  return (
    <main className="main">
      <div className="texts">
        <div>👋 Hi there, I'm Omar, a Full Stack Developer.</div>
        <span>I build </span>
        <span>wonderful</span>
        <div>products</div>

        <div className='buttons'>
          {iconsInfo.map((icon, index) => (
            <div className='but' key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.icon} alt='icon' />
              </a>
            </div>
          ))}
        </div>

        <div className="works">
          <Link to="/Projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button style={{ color: "white" }}>See My Works</button>
          </Link>
        </div>
      </div>

      <div className="photo">
        <img src={displaypic} alt="dp" />
      </div>
    </main>
  )
}

export default Home;
