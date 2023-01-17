import React, { useContext, useState } from "react";
import styl from "./Education.module.css";
import data from "../../db.json";
import StyleContext from "../StyleContext";
const Education = () => {
  const [edu, setEdu] = useState(data.Education);
  const { stylecard } = useContext(StyleContext);
  return (
    <div className={styl.Education} id="education">
      <h1>My Education</h1>
      <div className={styl.card}>
        {edu.map((elem) => {
          return (
            <div style={stylecard}>
              <img src={elem.image} alt="" />

              <div>
                <h3>{elem.title}</h3>
                <p>
                  <b>Branch : </b>
                  {elem.stream}
                </p>
                <p>
                  <b>Institute : </b>
                  {elem.college}
                </p>
                <p>
                  <b>Duration : </b>
                  {elem.duration}
                </p>
                <p>
                  <b>Grade : </b>
                  {elem.grade}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
