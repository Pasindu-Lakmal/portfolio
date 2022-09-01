import React from "react";
import SkillCards from "./components/SkillCards";

import "./index.css";
const WorkCards = () => {
  return (
    <section className="work-cards">
      <h1 className="title is-3 ">What I do?</h1>
      <div className="columns">
        <div className="column is-4">
          <SkillCards
            title="Brand Identity Building"
            des="What do you want your brand or company to be known for? We’ll articulate a brand identity, personality, and voice that will serve as the foundation for all your marketing communications."
            color="blue"
          />
        </div>
        <div className="column is-4">
          <SkillCards
            title="Community Development"
            des="Trying to make inroads with your local audience? We’ll craft an outreach plan and lay out the strategies you need to connect with your target community."
            color="yellow"
          />
        </div>
        <div className="column is-4">
          <SkillCards
            title="Copy & Content Strategy"
            des="Need words? Let’s get you some good ones and a great process for creating remarkable, consistent content that resonates with your audience."
            color="green"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkCards;
