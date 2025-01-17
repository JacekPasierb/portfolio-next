import React from "react";
import style from "./project.module.css";
import {projects} from "../../data/projectsList";
import Card from "../../ui/Card/Card";
import {mainProjects} from "../../data/mainProjects";

const page = () => {
  return (
    <main>
      <div className="container">
        <section className={`${style.projectsSection} text-center`}>
          <h2 className={style.projectHeading}>Moje Projekty</h2>
          <p>
            Przedstawiam Moje
            <span className="text-highlight"> największe projekty, </span> nad
            którymi niedawno pracowałem.
          </p>
          <div className="row row-cols-1 row-cols-lg-2 gy-4 gx-5 ">
            {mainProjects.map((project) => (
              <Card data={project} key={project.title} />
            ))}
          </div>
        </section>
        <section className={`${style.projectsSection} text-center`}>
          <p>
            Kilka mniejszych
            <span className="text-highlight"> projektów.</span>
          </p>
          <div className="row row-cols-1 row-cols-lg-2 gy-4 gx-5 ">
            {projects.map((project) => (
              <Card data={project} key={project.title} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
