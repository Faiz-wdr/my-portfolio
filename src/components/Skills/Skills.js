import {React} from 'react'
import Flutter from "../../assets/icons/flutter.svg";
import Figma from "../../assets/icons/figma.svg";
import Css from "../../assets/icons/css.svg";
import Html from "../../assets/icons/html.svg";
import Reactjs from "../../assets/icons/react.svg";
import Illu from "../../assets/icons/illu.svg";
import Psd from "../../assets/icons/psd.svg";
import Js from "../../assets/icons/js.svg";
// import { useNavigate } from 'react-router-dom'
import './Skills.css'


function Skills() {
    return (
      <div className="main">
            <div id='Skills' className='head'>
                <h1>Skills</h1>
            </div>
        <div className='body'>

            <img className="icon" alt='icon' src={Flutter}></img>
            <img className="icon" alt='icon' src={Figma}></img>
            <img className="icon" alt='icon' src={Html}></img>
            <img className="icon" alt='icon' src={Css}></img>
            <img className="icon" alt='icon' src={Reactjs}></img>
            <img className="icon" alt='icon' src={Js}></img>
            <img className="icon" alt='icon' src={Psd}></img>
            <img className="icon" alt='icon' src={Illu}></img>
            
        </div>
      </div>
    );
}

export default Skills