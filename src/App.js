import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import StyleContext from "./components/StyleContext";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Statistics from "./components/Statistics/Statistics";
function App() {
  const [stylecard, setStylecard] = useState({
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  });
  const [state, setState] = useState(false);
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [theme, setTheme] = useState("light");
  const changeStyle = () => {
    state
      ? setStyle({ backgroundColor: "white", color: "black" })
      : setStyle({ backgroundColor: "black", color: "white" });

    state
      ? setStylecard({
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        })
      : setStylecard({
          boxShadow: "white 0px 2px 4px 0px, white 0px 2px 16px 0px",
        });

    state ? setTheme("light") : setTheme("dark");

    state ? setState(false) : setState(true);
  };
  /* 
  
  
  
  */
  return (
    <div className={state ? "A" : "B"} id="App" style={style}>
      <StyleContext.Provider value={{ style, changeStyle, stylecard, theme }}>
        <Navbar />
        <div className="container">
          <Home heading="I'm Komal Kumar" />
          <hr />
          <About />
          <hr />
          <Skill />
          <hr />
          <Education />
          <hr />
          <Projects />
          <hr />
          <Statistics />
          <hr />
          <Contact />
        </div>
      </StyleContext.Provider>
    </div>
  );
}

export default App;
