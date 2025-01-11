import React from "react";
import Card from "./Card";
import {tools} from "../data/toolsList";

const ToolsList = () => {
  return (
    <ul className="row justify-content-center py-3">
      {tools.map((tool) => (
        <Card key={tool.name} list={tool} />
      ))}
    </ul>
  );
};

export default ToolsList;
