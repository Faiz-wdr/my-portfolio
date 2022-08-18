import React from "react";
import {} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/Aboutme/Aboutme";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./LandingPage.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import vector from "../../assets/img/3dimg.png";

function LandingPage() {
  return (
    <div className="Body">
      <div className="Banner">
        <div className="flex">
          <div className="Heading">
            <h1>
              Hi! I'm <span>Faiz</span>
            </h1>
            <p>
              Creative and Passionated Designer and
              <br />
              Web Developer
            </p>
            <div className="btn">
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </div>
          <div className="img">
            <img size="small" alt="vector img" src={vector}></img>
          </div>
        </div>
        
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <About />
      <Skills />
      <ProjectCard />
      <Footer />
    </div>
  );
}
export default LandingPage;
