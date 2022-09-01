import React from "react";
import HomeHero from "./components/HomeHero";
import WorkCards from "./components/WorkCards";
import "./index.css";
const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <WorkCards />
    </div>
  );
};

export default HomePage;
