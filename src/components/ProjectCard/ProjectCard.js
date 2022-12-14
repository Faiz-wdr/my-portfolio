import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaGithub } from "react-icons/fa";
import './ProjectCard.css';

export default function MediaCard() {
  return (
   <div id='Projects' className='project'>
    <h1>Recent Projects</h1>
    <div className='projectcards'>
      <div  className='card1'>
        <CardContent>
        <div className='card-content'>
            <Typography gutterBottom variant="h5" component="div"> 
              Lizard
            </Typography>
            <div className='content-text'>
              <p>Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
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
              Lizard
            </Typography>
            <div className='content-text'>
              <p>Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
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