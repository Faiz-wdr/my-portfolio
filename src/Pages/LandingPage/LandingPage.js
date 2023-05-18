import React from "react";
// import {} from "react-router-dom";
import { IoArrowUpCircle, IoArrowDown } from "react-icons/io5";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/Aboutme/Aboutme";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
// import TestCard from "../../components/TestCard/TestCard";
import Slider from "../../components/Slider/Slider";
import ProjCircle from '../../assets/img/my_proj_circle.svg'
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./LandingPage.css";
import vector from "../../assets/img/3dimg.png";
import { IconContext } from "react-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function LandingPage() {

  const scrollToProject = () => {
    const aboutSection = document.getElementById('project-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div id="Home" className="Body">
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

            {/* <div className="btn">
              <button onClick={() => console.log("connect")}>
                See My Projects <ArrowRightCircle size={25} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="img-body">
        <img className="img-bg" alt="vector img" src={vector}></img>
      </div>
      <NavBar />
      <div className="navbar">
        <div className="img-body2">
          <button className="btn-ar" onClick={scrollToProject}>
            <IoArrowDown size={55} color="white" />
          </button>
          <img className="img-bg2" alt="circle" src={ProjCircle}></img>
        </div>
      </div>
      <About />
      <Skills />
      <ProjectCard />

      <Footer />
    </div>
  );
}
export default LandingPage;
