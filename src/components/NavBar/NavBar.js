import {React, useRef} from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useNavigate } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBar.css'
function NavBar() {

     
    // const navigate = useNavigate()
    const navRef =useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <nav ref={navRef} className='nav_bar' >
                <div className='nav-text'>
                    <AnchorLink href='#Home'><a href="/#">Home</a></AnchorLink>
                    <AnchorLink href='#About'><a href="/#">About</a></AnchorLink>
                    <AnchorLink href='#Skills'><a href="/#">Skills</a></AnchorLink>
                    <AnchorLink href='#Projects'><a href="/#">Projects</a></AnchorLink>
                    <AnchorLink href='#Home'><a href="/#">Blogs</a></AnchorLink>
                </div>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                    <FaBars />
                </button>
        </header>
    )
}

export default NavBar