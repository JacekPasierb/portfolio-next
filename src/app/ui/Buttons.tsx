"use client";
import React from "react";

export interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  link,
  disabled,
  onClick,
}) => {
  return (
    <div className="button">
      {link ? (
        <a href={link} download>
          <button className="btn " disabled={disabled}>
            {icon}
            {title}
          </button>
        </a>
      ) : onClick ? (
        <button className="btn " disabled={disabled} onClick={onClick}>
          {icon}
          {title}
        </button>
      ) : (
        <button className="btn " disabled={disabled}>
          {icon}
          {title}
        </button>
      )}
    </div>
  );
};

export default Button;
