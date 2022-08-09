import React from 'react'
import './Footer.css'

const curryear = new Date().getFullYear();

function Footer(){

    return(
        <div className='footer'>
            <p>© <span>Faiz Rahim</span> . All Rights Resrved {curryear}</p>
        </div>
    );
}

export default Footer