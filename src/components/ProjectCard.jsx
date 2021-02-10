import React from "react";
import Data from "./projectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return Data.map((project, index) => (
    <div className={index % 2 === 0 ? "project-row" : "project-row alt-row"}>
      <div
        className={
          index % 2 === 0
            ? "project-img-column"
            : "project-img-column alt-img-column"
        }
      >
        <div className="img-wrap">
          <a href={project.site} target="_blank" rel="noreferrer">
            <img
              alt="Yathavan Pushpanathan"
              className="project-img"
              src={project.imgReact}
              // src={require("../images/" + project.img)}
            ></img>
          </a>
        </div>
      </div>
      <div
        className={
          index % 2 === 0 ? "project-column" : "project-column alt-column"
        }
      >
        <div className={index % 2 === 0 ? "card" : "card alt-card"}>
          <div class="card-body ">
            <h5 class="card-title">{project.title}</h5>
            <ul
              className={
                index % 2 === 0
                  ? "list-group list-group-flush"
                  : "list-group list-group-flush alt-desc"
              }
            >
              <li className="list-group-item proj-desc">
                {project.description}
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            index % 2 === 0 ? "techList-wrap" : "techList-wrap alt-tech-wrap"
          }
        >
          <div class="techList-container">
            <ul className={index % 2 === 0 ? "ul-wrap" : "ul-wrap alt-ul"}>
              {project.technologies.map((tech) => (
                <li className="technologies">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={index % 2 === 0 ? "btn-wrap" : "btn-wrap alt-btn"}>
          <a href={project.site} target="_blank" rel="noreferrer">
            <button type="button" class="btn btn-danger btn-site project-btn">
              <FaExternalLinkAlt className="btn-icon" /> Visit Site
            </button>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <button type="button" class="btn btn-info btn-github project-btn">
              <FaGithub className="btn-icon" /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  ));
};

export default ProjectCard;
