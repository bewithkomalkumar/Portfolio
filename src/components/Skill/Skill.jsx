import React from "react";

import des from "./Skill.module.css";
import SkillCard from "./SkillCard";
function Skill() {
  return (
    <div className={des.Skill} id="skills">
      <h1>Technologies I Know</h1>

      <SkillCard des={des} />
    </div>
  );
}

export default Skill;
