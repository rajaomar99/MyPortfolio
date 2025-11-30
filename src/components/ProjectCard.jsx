import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <div className='title'>{project.title}</div>

      <div className='tech-stack'>
        {project.techstack.map((tech) => (
          <img src={tech} alt='techstack' />
        ))}
      </div>

    </div>
  )
}

export default ProjectCard;
