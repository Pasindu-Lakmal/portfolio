import React from "react";

import "./index.css";
const SkillCards = (props) => {
  return (
    <div
      class={
        props.color === "blue"
          ? "card blue-card"
          : props.color === "yellow"
          ? "card yello-card"
          : "card green-card"
      }
    >
      <div class="card-content">
        <div class="content">
          <img alt="idea" className="card-image" src="lightbulb.png"></img>
          <h1 className="title is-4">{props.title}</h1>
          <p className="has-text-justified">{props.des}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
