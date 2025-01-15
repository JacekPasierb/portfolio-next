import Image from "next/image";
import React from "react";
import style from "./Card.module.css";
import {Certificate} from "../../types/certificate";

interface CardProps {
  data: Certificate;
  openModal: (cert: Certificate) => void;
}

const Card: React.FC<CardProps> = ({data, openModal}) => {
  return (
    <div className={`col py-4`}>
      <div className={`card h-100 ${style.card}`}>
        <Image
          src={data.image}
          className={`card-img-top ${style.cardImg}`}
          width={600}
          height={400}
          alt={data.description}
          onClick={() => openModal(data)}
          style={{cursor: "pointer"}}
        />
        <div className={`card-body ${style.cardBody}`}>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
