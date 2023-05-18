import {React, useRef} from 'react'
// import { useNavigate } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import Aboutme from '../Aboutme/Aboutme';
function NavBar() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProject = () => {
    const aboutSection = document.getElementById('project-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
     
    // const navigate = useNavigate()
    const navRef =useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
      <header>
        <nav ref={navRef} className="nav_bar">
          <ul>
            <li className="nav-list">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-list">
            <a href="#about-section" onClick={scrollToAbout}>About</a>
            </li>
            <li className="nav-list">
              <Link to="#project-section" onClick={scrollToProject}>Projects</Link>
            </li>
            <li className="nav-list">
              <Link to="Blog">Blogs</Link>
            </li>
          </ul>
        </nav>
        
      </header>
    );
}

export default NavBar