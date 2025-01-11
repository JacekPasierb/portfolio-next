import React from "react";
import Card from "./Card";
import { skills } from "../data/skillsList";



const SkillsList = () => {
  return (
    <ul className="row justify-content-center py-3">
      {skills.map((skill) => (
        <Card key={skill.name} list={skill} />
      ))}
    </ul>
  );
};

export default SkillsList;
