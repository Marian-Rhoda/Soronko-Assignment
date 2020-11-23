
import React from 'react';
import mrdp from '../images/mrdp.jpg';
import Post1 from './Post1.js';
import Postform from './Postform.js';
import '../style/Home.css';

export default function Home() {

    return(
        <div className= 'home'>
        <header className= 'Home-header'>
    
        
            {<img src={mrdp} className= "mrdp" alt= 'mrdp'/>}
            
        </header>
        <form className='Home-form'>
            <h1>Hey there!</h1>
            <p>
                Welcome to Lifestyle with M-R. Get ready for exciting news and articles to help you improve your general wellbeing, love-life, and to empower yourself as a woman. Enjoy!
            </p>

        </form>
        <div class='left-column'>
            <div class='card'>
        <Post1 />
             </div>

        </div>
        <div class='right-column'>
        <div class='card'>
          <Postform />
          </div>
          </div>


        </div>
)

    }