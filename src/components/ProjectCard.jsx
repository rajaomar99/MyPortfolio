import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-top">
        <div className="card-number">0{project.index + 1 || "1"}</div>
        <div className="card-arrow">↗</div>
      </div>

      <div className="card-content">
        <div className="card-title">{project.title}</div>
        <p className="card-snippet">
          {project.description.slice(0, 110).trim()}…
        </p>
      </div>

      <div className="card-footer">
        <div className="tech-stack">
          {project.techstack.map((tech, i) => (
            <img src={tech} alt="techstack" key={i} />
          ))}
        </div>
        <span className="card-cta">View Details</span>
      </div>
    </div>
  );
};

export default ProjectCard;
