import React from "react";
import "./skill.css";
import { Skills } from "../../data";

export default function Skill(props) {
  return (
    <div className="skill-main" id="skill">
      <div
        className="skill-content"
        style={{
          backgroundColor: `${props.mode === "light" ? "#f0f0f0" : "black"}`,
        }}
      >
        <div className="skill-start">SERVICES</div>
        <div className="skill-end">Specialized in</div>
        <div className="skill-card">
          {Skills.map((skill, id) => (
            <div className="skill-card-section">
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
