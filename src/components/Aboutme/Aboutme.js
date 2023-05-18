import React, { useRef} from 'react';
import './Aboutme.css';
import { useState, useEffect } from 'react';

function Aboutme(){

 

    return (
        <div  id="about-section" className='container-cmpnt'>
        <div className="column-left">
        <div  className='abt-txt'>
          <h1 className='abt-hed'>
            About Me
          </h1>
          <div >
          <p className='abt-para'>
          I am a versatile designer and developer, specializing in UI/UX, graphics, and web. I create visually stunning, user-centric experiences by blending creativity with functionality. With a passion for crafting engaging interfaces, I deliver impactful digital solutions.
          I am dedicated to exceeding client expectations and creating impactful digital solutions.
          </p>
          </div>
        </div>
        <div className='column-right'>
        <div className='abt-img'>
        <div className='round-img'>
        </div>
          
        </div>
        
        </div>
        </div>
        </div>
    );
}

export default Aboutme