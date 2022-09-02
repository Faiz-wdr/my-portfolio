import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import './TestCard.css';


function TestCard() {
    return (
      <div className="card-bg">
        <h1>Client’s Feedback About Me</h1>
          <div className="Card">
            <s id="s1"></s>
            <s id="s2"></s>
            <s id="s3"></s>
            <s id="s4"></s>

            <div className="Testcards">
              <div className="t-card1">
                <CardContent>
                  <div className="t-card-content">
                    <div className="t-content-text">
                      <p>
                        Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica. Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <div className="c-btm">
                  <div className="avatar"></div>
                  <div className="cli-name">
                    <h4>Robert Alexander</h4>
                    <p>Founder, Gustavo Pvt Ltd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Testcards">
              <div className="t-card1">
                <CardContent>
                  <div className="t-card-content">
                    <div className="t-content-text">
                      <p>
                      Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica. Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <div className="c-btm">
                  <div className="avatar"></div>
                  <div className="cli-name">
                    <h4>Robert Alexander</h4>
                    <p>Founder, Gustavo Pvt Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="bullets">
          <a href="#s1"></a>
          <a href="#s2"></a>
          <a href="#s3"></a>
          <a href="#s4"></a>
        </div>
      </div>
    );
 }

 export default TestCard