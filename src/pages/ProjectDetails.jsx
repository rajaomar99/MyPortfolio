import React from 'react'
import './ProjectDetails.css'
import { useParams } from 'react-router-dom';
import { myprojects } from '../data/projects';
import githubIcon from "../assets/github-svgrepo-com.svg";
import siteIcon from "../assets/site.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  const { title } = useParams();

  const proj = myprojects.find((project) => (project.title === title));

  return (
    <div className='outer-project-box'>
      <div className='line'></div>

      <div className='details-title'>{proj.title}</div>

      <div className='techstack-box'>
        {proj.techstack.map((tech) => (
          <img src={tech} alt='tech' />
        ))}
      </div>

      <div className='images-box'>
        {proj.images && (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {proj.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`slide-${index}`}
                  style={{
                    width: "80%",
                    margin: "auto",
                    display: "block",
                    borderRadius: "8px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className='project-icons'>
        <a href={proj.githublink}>
          <img src={githubIcon} alt='github' />
        </a>
        <a href={proj.sitelink}>
          <img src={siteIcon} alt='github' />
        </a>
      </div>

      <div className='desc' style={{ whiteSpace: 'pre-line', textAlign:'left'}}>{proj.description}</div>

      <div className='line'></div>

    </div>
  )
}

export default ProjectDetails;
