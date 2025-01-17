import Image from "next/image";
import React from "react";
import style from "./Card.module.css";
import {Certificate} from "../../types/certificate";
import Button from "../Buttons";

interface CardProps {
  data: Certificate;
  openModal?: (cert: Certificate) => void;
}

const Card: React.FC<CardProps> = ({data, openModal}) => {
  return (
    <div className={`col py-4 `}>
      <div className={`card h-100 ${style.card}`}>
        <Image
          src={data.image}
          className={`card-img-top ${style.cardImg}`}
          width={600}
          height={400}
          alt={data.description}
          onClick={openModal ? () => openModal(data) : undefined}
          style={{cursor: "pointer"}}
          priority
        />
        <div className={`card-body ${style.cardBody}`}>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          {data.account ? (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h5>Konto Testowe:</h5>
              <p className="card-text">
                <strong>Login:</strong> {data.account.login}
              </p>
              <p className="card-text">
                <strong> Hasło:</strong> {data.account.password}
              </p>
            </div>
          ) : null}
        </div>
        <div className="card-footer d-flex flex-wrap gap-2 justify-content-center align-items-center">
          {data.github && (
            <Button
              title={"Github"}
              icon={<i className="bi bi-github me-2 "></i>}
              link={data.github}
            />
          )}
          {data.backend && (
            <Button
              title={"Backend"}
              icon={<i className="bi bi-calendar2-week me-2 "></i>}
              link={data.backend}
            />
          )}
          {data.strapi && (
            <Button
              title={"Strapi CMS"}
              icon={<i className="bi bi-calendar2-week me-2 "></i>}
              link={data.strapi}
            />
          )}
          {data.demo && (
            <Button
              title={"Demo"}
              icon={<i className="bi bi-projector me-2 "></i>}
              link={data.demo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
