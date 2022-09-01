import React from "react";
import Contact from "./components/Contact";
import HomeHero from "./components/HomeHero";
import WorkCards from "./components/WorkCards";
import "./index.css";
const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <WorkCards />
      <Contact />
    </div>
  );
};

export default HomePage;
