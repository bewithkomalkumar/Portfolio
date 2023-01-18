import React, { useState } from "react";
import { useEffect } from "react";
import style from "./Home.module.css";
import hello from "../Images/hello.png";
import profile from "../Images/profile.jpg";
function Name({ heading }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const str = `  ${heading} `;
    let i = 0;
    setTimeout(() => {
      let id = setInterval(() => {
        if (i === str.length - 2) {
          setName(heading);
          clearInterval(id);
        }
        setName((name) => name + str[i]);
        i++;
      }, 250);
    }, 1000);
  }, []);
  return (
    <div className={style.home}>
      <div className={style.About} id="home">
        <div>
          <h1 className={style.hello}>
            Hello,<span>&#128075;</span>
          </h1>

          <h1>{name}|</h1>

          <p>
            Full Stack Web Developer, Proficient Skilled in Frontend and Backend
            Development for producing the Quality work
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1hEovfM-y0Hc9Z6vIugEJboa73wE-8i6L/view?usp=share_link "
              target="_blank"
            >
              <button>
                <i class="fa-solid fa-arrow-down"></i> Resume
              </button>
            </a>
            <a href="tel: +91 9717194080" target="_blank">
              <button>
                <i class="fa-regular fa-circle-check"></i> Hire me!
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src={profile} alt="Profile_pic" />
        </div>
        {/* <input type="text" value={name} autoFocus=" true" className="main-name" /> */}
      </div>
      <div className={style.coding}>
        <h2>1200+ hours of Coding</h2>
        <p className={style.line}></p>
        <h2 style={{ textAlign: "center" }}>
          460+ DSA <br />
          Question Solved (OJ)
        </h2>
        <p className={style.line}></p>
        <h2>1000+ Hours DSA</h2>
      </div>
    </div>
  );
}

export default Name;
