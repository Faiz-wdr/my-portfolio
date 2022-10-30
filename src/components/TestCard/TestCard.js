import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import './TestCard.css';

const colors = ["", "", ""];
const delay = 4500;

function Slideshow() {

  

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

 return (
  
   <div className="card-bg">
      
     <h1>Client’s Feedback About Me</h1>
     <div className="slideshow">
       <div
         className="Card"
         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
       >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
         <div className="slide" key={index}></div>
         
         <div className="Testcards">
           <div className="t-card1">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p>
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
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
           <div className="t-card2">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p>
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
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
           <div className="t-card3">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p>
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
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
           <div className="t-card4">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p>
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
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
     </div>
f
     <div className="slideshowDots">
       {colors.map((_, idx) => (
         <div
           key={idx}
           className={`slideshowDot${index === idx ? " active" : ""}`}
           onClick={() => {
             setIndex(idx);
           }}
         ></div>
       ))}
     </div>
   </div>
 );
 }

 export default Slideshow