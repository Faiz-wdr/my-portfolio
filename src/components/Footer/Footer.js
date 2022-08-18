import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import './Footer.css'

const curryear = new Date().getFullYear();

function Footer(){

    return (
      <div className="footer">
        <div className="socio-icons">
          <a href='https://www.instagram.com/creative_faiz/'><FaInstagram /></a>
          <a href='https://github.com/Faiz-wdr'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/mohammedfaizk/'><FaLinkedin /></a>
          {/* <a href=''><FaBehance /></a> */}
          <a href='https://in.pinterest.com/Faizwdr/'><FaPinterest /></a>
        </div>
        <p>
          © <span>Faiz Rahim</span> . All Rights Resrved {curryear}
        </p>
      </div>
    );
}

export default Footer