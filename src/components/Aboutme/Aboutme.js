import React, {} from 'react';
import './Aboutme.css';

function Aboutme(){
    return (
      <div className="column">
        <div className="vector"></div>
        <div className="about">
          <h1>About Me</h1>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames morbi
            lectus cursus nec sem aliquet lacus, sed. Enim, elementum, ultrices
            ultrices risus dignissim cursus ultrices cursus. Quam vitae non
            lectus et vulputate. Et purus etiam habitasse in elementum dolor,
            tincidunt rutrum. Nisi lectus eu tortor in egestas id est
            vestibulum. Nunc cras nibh gravida posuere. Ac nibh dui etiam amet,
            urna. Lorem bibendum.
          </p>
          <button><span>Download Resume</span></button>
        </div>
      </div>
    );
}

export default Aboutme