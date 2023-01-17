import React from "react";
import design from "../Projects/Projects.module.css";
import githubcal from "../Images/githubcalender.png";
import StyleContext from "../StyleContext";
import { useContext } from "react";
function Statistics() {
  const { theme } = useContext(StyleContext);
  return (
    <div id="Stats">
      <h1 style={{ textAlign: "center" }}>My Contribution</h1>
      <div className={design.github}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=bewithkomalkumar&show_icons=true&locale=en&theme=${theme}`}
          alt="gitstat"
        />

        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=bewithkomalkumar&theme=${theme}`}
          alt=""
        />
      </div>
      <br />
      <img src={githubcal} alt="" width="100%" />
    </div>
  );
}

export default Statistics;
