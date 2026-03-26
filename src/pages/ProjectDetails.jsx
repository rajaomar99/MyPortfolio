import React from 'react'
import './ProjectDetails.css'
import { useParams, useNavigate } from 'react-router-dom';
import { myprojects } from '../data/projects';
import githubIcon from "../assets/github-svgrepo-com.svg";
import siteIcon from "../assets/site.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const proj = myprojects.find((project) => (project.title === title));

  return (
    <div className='outer-project-box'>

      <div className='details-hero'>
        <div className='details-left'>
          <button className='details-link-btn' onClick={() => navigate(-1)}>← Back to Projects</button>
          <div className='details-title'>{proj.title}</div>
          <div className='techstack-box'>
            {proj.techstack.map((tech, i) => (
              <img src={tech} alt='tech' key={i} />
            ))}
          </div>
        </div>

        <div className='details-links'>
          {proj.githublink && (
            <a href={proj.githublink} target="_blank" rel="noopener noreferrer" className='details-link-btn'>
              <img src={githubIcon} alt='github' />
              GitHub
            </a>
          )}
          {proj.sitelink && (
            <a href={proj.sitelink} target="_blank" rel="noopener noreferrer" className='details-link-btn primary'>
              <img src={siteIcon} alt='live site' />
              Live Site
            </a>
          )}
        </div>
      </div>

      <div className='content-grid'>
        <div className='images-box'>
          {proj.images && (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
            >
              {proj.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`slide-${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className='desc-section'>
          <span className='desc-label'>Overview</span>
          <p className='desc' style={{ whiteSpace: 'pre-line' }}>{proj.description}</p>
        </div>
      </div>

    </div>
  )
}

export default ProjectDetails;

