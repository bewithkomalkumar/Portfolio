import React, { useContext, useState } from "react";
import design from "./Projects.module.css";
import data from "../../db.json";
import StyleContext from "../StyleContext";
import cult from "../Images/cult.png";
import urban from "../Images/urban.png";
import portfolio from "../Images/portfolio.png";
import githubcal from "../Images/githubcalender.png";
import fitnesspal from "../Images/fitnesspal.png";
function Projects() {
  const [projects] = useState(data.Projects);
  const [images] = useState([fitnesspal, cult, urban, portfolio]);
  const { stylecard, theme } = useContext(StyleContext);

  return (
    <>
      <div id="projects" className={design.Projects}>
        <h1>My Projects</h1>
        <div className={design.card}>
          {projects.map((elem, i) => {
            return (
              <div style={stylecard}>
                <div>
                  <img src={images[i]} alt="" />
                </div>
                <div className={design.desc}>
                  <div>
                    <h3>{elem.titile}</h3>
                    <p>
                      <b>Description : </b>
                      {elem.desc}
                    </p>
                    <p>
                      <b>Project Type : </b> {elem.Projecttype}
                    </p>
                    <p>
                      <b>Tech Stack : </b> {elem.techstack}
                    </p>
                  </div>
                </div>
                <div className={design.btn}>
                  <a href={elem.github} target="_blank">
                    <button class={design.button24} role="button">
                      Source Code
                    </button>
                  </a>
                  <a href={elem.live} target="_blank">
                    <button class={design.button24} role="button">
                      Explore Live
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
