import React from "react";
import style from "./resume.module.css";

const page = () => {
  return (
    <main>
      <div className="container">
        <section className={`${style.resumeSection}`}>


          <div className="resume"></div>
        </section>
      </div>
    </main>
  );
};

export default page;
