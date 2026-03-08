import React from 'react'
import './About.css'

const skills = [
  { label: "React / Next.js", level: 92 },
  { label: "Node.js / Express", level: 88 },
  { label: "TypeScript", level: 80 },
  { label: "MongoDB / PostgreSQL", level: 85 },
  { label: "Tailwind CSS", level: 90 },
  { label: "AI / LLM Integration", level: 70 },
];

const About = () => {
  return (
    <div className='about-page'>
      <div className='about-header'>
        <span className='section-tag'>About Me</span>
        <h1 className='about-title'>Crafting digital experiences <br /><span className='about-title-accent'>with purpose.</span></h1>
      </div>

      <div className='about-grid'>
        <div className='about-text-col'>
          <p>
            I'm a Full Stack Developer passionate about building dynamic and efficient web
            applications. With hands-on experience across the full stack — Next.js, MERN, and TypeScript — I focus on
            writing clean, performant code that delivers real value.
          </p>
          <p>
            I'm currently deepening my knowledge in the AI ecosystem, including LLM Integration,
            RAG (Retrieval Augmented Generation), and Vector Databases — technologies transforming
            how we build intelligent applications.
          </p>
          <p>
            I enjoy solving complex problems and continuously learning new technologies. Whether
            crafting seamless user experiences or optimizing backend processes, I deliver
            high-quality solutions that scale.
          </p>

          <div className='about-chips'>
            {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Prisma", "Express", "LLM / RAG"].map(s => (
              <span key={s} className='chip'>{s}</span>
            ))}
          </div>
        </div>

        <div className='about-skills-col'>
          <div className='skills-card'>
            <div className='skills-card-title'>Core Skills</div>
            {skills.map(skill => (
              <div key={skill.label} className='skill-row'>
                <div className='skill-meta'>
                  <span className='skill-name'>{skill.label}</span>
                  <span className='skill-pct'>{skill.level}%</span>
                </div>
                <div className='skill-bar-bg'>
                  <div className='skill-bar-fill' style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

