import React from "react";
import bike from "../images/bike.jpg";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="content-container">
          <div className="about-container-row">
            <div className="container-column">
              <div className="text-wrap">
                <h1 className="about-heading">About Me.</h1>
                <p className="about-text">
                  Hi! My name is Yathavan Pushpanathan, an aspiring web designer
                  & developer based in Toronto, Canada. After graduating in 2018
                  with a Bachelor’s Degree from Ryerson University, I spent the
                  last few years learning and working across various scopes of
                  digital development; from static webpages to full stack
                  applications. I take great delight in researching new
                  technologies and applying them to my practice, be it a web
                  application or a simple coding problem. Outside of programming
                  you can find me painting, traveling, playing League of
                  Legends, or exploring new restaurants!
                </p>

                <p className="about-text">
                  Here is a list of some of the technologies I am currently
                  working with:
                </p>
                <div className="skill-wrap">
                  <div className="row">
                    <div className="col">
                      <ul className="about-ul">
                        <li>React</li>
                        <li>JavaScript ES6</li>
                        <li>Express</li>
                        <li>Java</li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="about-ul">
                        <li>MongoDB</li>
                        <li>Git</li>
                        <li>Heroku</li>
                        <li>Node.js</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-column">
              <div className="about-img-wrap">
                <img
                  alt="Yathavan Pushpanathan"
                  className="bike-img"
                  src={bike}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
