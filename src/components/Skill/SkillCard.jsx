import React, { useContext, useState } from "react";
import reactimage from "../Images/react.png";
import redux from "../Images/redux.png";
import node from "../Images/node.png";
import html from "../Images/html.png";
import js from "../Images/js.png";
import css from "../Images/css.png";
import chakra from "../Images/chakra.jpg";
import bootstrap from "../Images/Bootstrap.png";
import StyleContext from "../StyleContext";
import java from "../Images/java.png";
function SkillCard({ des }) {
  const { stylecard } = useContext(StyleContext);
  return (
    <div className={des.card}>
      <div style={stylecard}>
        <img src={reactimage} alt="react" width="100px" />
        <h4>React</h4>
      </div>
      <div style={stylecard}>
        <img src={redux} alt="react" width="100px" />
        <h4>Redux</h4>
      </div>
      <div style={stylecard}>
        <img src={node} alt="react" width="100px" />
        <h4>Node js</h4>
      </div>
      <div style={stylecard}>
        <img src={html} alt="react" width="100px" />
        <h4>HTML</h4>
      </div>
      <div style={stylecard}>
        <img src={css} alt="react" width="100px" />
        <h4>CSS</h4>
      </div>
      <div style={stylecard}>
        <img src={js} alt="react" width="100px" />
        <h4>JavaScript</h4>
      </div>
      <div style={stylecard}>
        <img src={java} alt="react" width="100px" />
        <h4>Java</h4>
      </div>

      <div style={stylecard}>
        <img src={chakra} alt="react" width="100px" />
        <h4>Chakra-UI</h4>
      </div>
      <div style={stylecard}>
        <img src={bootstrap} alt="react" width="100px" />
        <h4>Bootstrap</h4>
      </div>
    </div>
  );
}

export default SkillCard;
