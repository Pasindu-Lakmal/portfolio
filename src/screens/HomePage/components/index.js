import React from "react";
import "./index.css";
const HomeHero = () => {
  return (
    <section>
      <div className="columns">
        <div className="column hero-text-col is-6">
          <h1 className="title is-4">Hi, My Name is Pasindu</h1>
          <h1 className="title is-2">
            I'm a freelance UI/UX Designer with a markerting background
            specializing in Shopify & Webflow
          </h1>
          <button class="button mr-2 is-link">
            <span class="icon">
              <i class="fa-brands fa-linkedin"></i>
            </span>
            <span>Linkedin</span>
          </button>
          <button class="button is-pink">
            <span class="icon">
              <i class="fa-brands fa-dribbble"></i>
            </span>
            <span>Dribbble</span>
          </button>
        </div>
        <div className="has-text-centered column is-6">
          <img alt="profile" className="hero-img" src="Pasindu.png" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
