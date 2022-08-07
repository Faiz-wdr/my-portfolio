import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
function NavBar() {

    const navigate = useNavigate()

    return (
        <nav className='nav_bar' >
            <ul>
                <li>Home</li>
                <li
                    onClick={() => navigate('/about')}
                >About</li>
                <li
                    onClick={() => navigate('/about')}
                >Skills</li>
                <li
                    style={{ cursor: 'pointer' }}

                >Projects</li>
                <li>Blogs</li>
            </ul>

        </nav>
    )
}

export default NavBar