import {React, useRef} from 'react'
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
                    <a href="/#">Home</a>
                    <a href="/#">About</a>
                    <a href="/#">Skills</a>
                    <a href="/#">Projects</a>
                    <a href="/#">Blogs</a>
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