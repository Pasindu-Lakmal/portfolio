import React from "react";
import "./index.css";
const NavBar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            alt="bulma icon"
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          href="#!"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href="/" class="navbar-item">
            Home
          </a>

          <a href="/about" class="navbar-item">
            About
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a href="https://github.com/Pasindu-Lakmal">
                <button class="button is-black mr-2">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </button>
              </a>
              <a href="https://www.facebook.com/pasindu.lakmal.1238">
                <button class="button is-link">
                  <span class="icon">
                    <i class="fa-brands fa-square-facebook"></i>
                  </span>
                  <span>Facebook</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
