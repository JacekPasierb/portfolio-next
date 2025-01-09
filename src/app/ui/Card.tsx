import React from "react";

type CardProps = {
  list: {
    name: string;
    icon: React.ReactElement;
  };
};

const Card: React.FC<CardProps> = ({list}) => {
  return <li className="tech-icons  col-md-2 col-4">{list.icon}</li>;
};

export default Card;
