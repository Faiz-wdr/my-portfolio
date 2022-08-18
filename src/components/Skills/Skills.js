import {React} from 'react'
import { IconContext } from "react-icons/lib"
import { SiFlutter, SiJavascript } from "react-icons/si";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaJava } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom'
import './Skills.css'


function Skills() {
    return (
      <div className="main">
            <div className='head'>
                <h1>Skills</h1>
            </div>
        <div className='body'>
            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <FaHtml5 />
            </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <FaCss3 />
            </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <FaReact />
            </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <FaFigma />
            </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <FaJava />
            </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <SiFlutter />
            </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '25px', className: "html" }}>
            <div>
                <SiJavascript />
            </div>
            </IconContext.Provider>
        </div>
      </div>
    );
}

export default Skills