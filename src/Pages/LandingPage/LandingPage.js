import React, { } from 'react'
import {  } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/Aboutme/Aboutme';
import Footer from '../../components/Footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './LandingPage.css'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Bgimg from '../../assets/img/Bgimg.png'

function LandingPage(){

    return (
      <div
        className="Body"
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundPosition: "top",
          backgroundSize: "100%",
        }}
      >
        <div className="Banner">
          <div className="Heading">
            <h1>
              Hi! I'm <span>Faiz</span>
            </h1>
            <p>
              Creative and Passionated Designer and
              <br />
              Web Developer
            </p>
            <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </div>
        </div>
        <NavBar />
        <About />
        <ProjectCard />
        <Footer />

      </div>
    );
} 
export default LandingPage