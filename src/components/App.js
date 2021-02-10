import React from "react";
import Layout from "./Layout";
import Project from "./Project";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Hero />
          <About />
          <Project />
          <Contact />
        </Layout>
      </Router>
    </>
  );
};

export default App;
