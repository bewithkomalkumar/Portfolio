import React, { useRef } from "react";
import st from "./Navbar.module.css";
import StyleContext from "../StyleContext";
import { useContext } from "react";
import { useState } from "react";
function Navbar() {
  const { changeStyle, state } = useContext(StyleContext);
  const [darkmode, setDarkmode] = useState("fa-solid fa-moon");
  const ref = useRef(null);
  const [mobile, setMobile] = useState({
    backgroundColor: "black",
    color: "white",
  });
  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  return (
    <div className={st.Navbar} style={mode}>
      <div>
        <h3 className={st.hide}>KOMAL KUMAR</h3>
      </div>
      <div>
        <a style={mode} href="#home">
          Home
        </a>
        <a style={mode} href="#Aboutme">
          About
        </a>
        <a style={mode} href="#skills">
          Skills
        </a>
        <a href="#education" style={mode}>
          Education
        </a>
        <a href="#projects" style={mode}>
          Projects
        </a>
        <a href="#Stats" style={mode}>
          Statistics
        </a>
        <a href="#contact" style={mode}>
          Contact
        </a>

        <i
          onClick={() => {
            changeStyle();
            if (mode.backgroundColor === "white") {
              setMode({ backgroundColor: "black", color: "white" });
              setDarkmode("fa-solid fa-sun");
            } else {
              setMode({ backgroundColor: "white", color: "black" });
              setDarkmode("fa-solid fa-moon");
            }
          }}
          className={darkmode}
        ></i>
      </div>
      <div className={st.hamburger}>
        <button
          onClick={() => {
            if (ref.current.style.display === "none") {
              ref.current.style.display = "flex";
            } else {
              ref.current.style.display = "none";
            }
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <i
          onClick={() => {
            changeStyle();
            if (mode.backgroundColor === "white") {
              setMode({ backgroundColor: "black", color: "white" });
              setDarkmode("fa-solid fa-sun");
            } else {
              setMode({ backgroundColor: "white", color: "black" });
              setDarkmode("fa-solid fa-moon");
            }
          }}
          className={darkmode}
        ></i>
      </div>
      <div ref={ref}>
        <a style={mode} href="#home">
          Home
        </a>
        <hr />
        <a style={mode} href="#Aboutme">
          About
        </a>
        <hr />
        <a style={mode} href="#skills">
          Skills
        </a>
        <hr />
        <a href="#education" style={mode}>
          Education
        </a>
        <hr />
        <a href="#projects" style={mode}>
          Projects
        </a>
        <hr />
        <a href="#Stats" style={mode}>
          Statistics
        </a>
        <hr />
        <a href="#contact" style={mode}>
          Contact
        </a>
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
