import React from 'react'
import { myprojects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projects-page'>
      <div className='projects-header'>
        <span className='section-tag'>Portfolio</span>
        <h1>Things I've <span>Built</span></h1>
      </div>
      <div className='projects-box'>
        {myprojects.map((proj) => (
          <Link to={`/Projects/${proj.title}`} style={{textDecoration: 'none'}} key={proj.title}>
            <ProjectCard project={proj} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects;

