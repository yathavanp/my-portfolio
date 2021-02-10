import React from "react";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <>
      <div className="project-container" id="projects">
        <div className="content-container">
          <h1 className="project-heading">Projects</h1>
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Project;
