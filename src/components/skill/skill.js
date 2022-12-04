import React from "react";
import "./skill.css";
import { Skills } from "../../data";

export default function Skill(props) {
  return (
    <div
      className="skill-main"
      id="skill"
      style={{
        backgroundColor: `${
          props.mode === "light" ? "rgb(233, 246, 250)" : "#2e2e2e"
        }`,
      }}
    >
      <div className="skill-content" data-aos="fade-up">
        <div className="skill-start">SERVICES</div>
        <div className="skill-end">Specialized in</div>
        <div className="skill-card">
          {Skills.map((skill, id) => (
            <div className="skill-card-section" key={id}>
              <div className="image-wrapper">{skill.icon}</div>
              <div className="skill_title">{skill.title}</div>
              <div className="skill-description">{skill.Description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
