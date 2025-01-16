import React from "react";
import style from "./CardIcon.module.css";

interface CardIconProps {
  list: {
    name: string;
    icon: React.ReactElement;
  };
}

const CardIcon: React.FC<CardIconProps> = ({list}) => {
  return <li className={`${style.cardIcon}  col-md-2 col-4`}>{list.icon}</li>;
};

export default CardIcon;
