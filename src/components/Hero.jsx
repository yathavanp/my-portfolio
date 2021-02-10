import React from "react";
import logo from "../images/anps.png";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="home">
        <div className="content-container">
          <div className="container-row">
            <div className="container-column">
              <div className="text-wrap">
                <div className="intro-text">Hello world,</div>
                <h1 className="hero-heading">I'm Yathavan.</h1>
                <p className="subtitle">
                  A full stack developer based in Toronto, CA.
                </p>
                <a href="mailto:pushyathavan@gmail.com">
                  <button className="btn btn-outline-light btn-lg hero-btn">
                    Reach Out
                  </button>
                </a>
              </div>
            </div>
            <div className="container-column">
              <div className="img-wrap">
                <img
                  alt="Painting of Yathavan Pushpanathan"
                  className="anps-logo"
                  src={logo}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
