import React from 'react'
import { myprojects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projects-box'>
      {myprojects.map((proj) => (
        <Link to={`/Projects/${proj.title}`} style={{textDecoration: 'none'}}>
          <ProjectCard project={proj} />
        </Link>
      ))}
    </div>
  )
}

export default Projects;
