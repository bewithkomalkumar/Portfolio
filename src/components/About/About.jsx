import React, { useState } from "react";
import styles from "./About.module.css";
import about from "../Images/about.png";
import data from "../../db.json";
const About = () => {
  //console.log(AboutMe);
  const [state, setState] = useState(data.AboutMe);
  return (
    <div className={styles.Aboutme} id="Aboutme">
      <div>
        <img src={about} alt="" />
      </div>
      <div>
        <h1>About Me</h1>
        <ul>
          {state.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default About;
