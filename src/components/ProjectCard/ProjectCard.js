import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaGithub } from "react-icons/fa";
import './ProjectCard.css';

export default function MediaCard() {
  return (
   <div id='project-section' className='project'>
   <div className='proj-head'>
    <h1>Recent Projects</h1>
    </div>
    <div className='projectcards'>
    
      <div  className='card1'>

        <CardContent>
        <div className='card-content'>
            <Typography gutterBottom variant="h5" component="div"> 
              Morse Code App
            </Typography>
            <div className='content-text'>
              <p>Flutter app that translates Morse code and triggers the flashlight accordingly.
              </p>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className='buttons'>
          <Button size="small"> <FaGithub size="1.5em"/></Button>
          <Button size="small">Demo</Button>
          </div>
        </CardActions>
        </div>
        <div className='img-box'>
           
      </div>
        <div  className='card2'>
          
        <CardContent>
        <div className='card-content'>
            <Typography gutterBottom variant="h5" component="div">
              Socium: Find the Learning Partner
            </Typography>
            <div className='content-text'>
              <p>
Discover your ideal learning partner with this React app designed to connect individuals seeking genuine educational collaborations.
              </p>
            </div>
          </div>
        </CardContent>
        <CardActions>
        <div className='buttons'>
        <Button size="small"> <FaGithub size="1.5em" /></Button>
        <Button size="small">Demo</Button>
        </div>
        </CardActions>
        
      </div>
      </div>
    </div>
  );
}