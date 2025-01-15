import React from "react";
import { skills } from "../data/skillsList";
import CardIcon from "./CardIcon";



const SkillsList = () => {
  return (
    <ul className="row justify-content-center py-3">
      {skills.map((skill) => (
        <CardIcon key={skill.name} list={skill} />
      ))}
    </ul>
  );
};

export default SkillsList;
