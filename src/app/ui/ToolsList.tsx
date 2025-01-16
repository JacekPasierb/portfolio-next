import React from "react";
import {tools} from "../data/toolsList";
import CardIcon from "./CardIcon/CardIcon";

const ToolsList = () => {
  return (
    <ul className="row justify-content-center py-3">
      {tools.map((tool) => (
        <CardIcon key={tool.name} list={tool} />
      ))}
    </ul>
  );
};

export default ToolsList;
