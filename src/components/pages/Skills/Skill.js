import React from "react";
import { skills } from "../../assests/assests";
import "./skill.css";

const Skill = () => {
  return (
    <div className="skill">
      <h1>Things I Code With</h1>
      <div className="skillicons">
        {skills.map((skill, index) => (
          <div className="icon-box" key={index}>
            {skill.icon}
            <span className="icon-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
