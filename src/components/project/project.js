import React from "react";
import "./project.css";
import { Icon } from "@iconify/react";
import { Projects } from "../../data";

export default function project() {
  return (
    <div className="project-main" id="project">
      <div>
        <div className="project-start">MY WORKS</div>
        <div className="project-end">Featured Portfolio</div>
        <div className="project-card">
          {Projects.map((project, id) => (
            <div
              className={`project-card-section span-${project.id}`}
              key={project.id}
            >
              <img src={project.img} className="project-image-wrapper" alt="" />
              <div className="project_title">{project.name}</div>
              <div className="project-info">
                <span className="p-title">{project.description}</span>
              </div>
              <div className="project-link">
                <input
                  type="button"
                  value={project.source}
                  className="input-value"
                />
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Icon icon="ci:link" color="gray" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
