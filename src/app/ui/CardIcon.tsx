import React from "react";

type CardIconProps = {
  list: {
    name: string;
    icon: React.ReactElement;
  };
};

const CardIcon: React.FC<CardIconProps> = ({list}) => {
  return <li className="tech-icons  col-md-2 col-4">{list.icon}</li>;
};

export default CardIcon;
