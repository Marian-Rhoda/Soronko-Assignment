import React from 'react';
import mrpink from '../images/mrpink.jpg';

export default function About() {

    return(
        <div className= 'about'>
        <header className= 'about-header'>
        
            {<img src={mrpink} className= "mrpink" alt= 'MRhoda'/>}
            
        </header>
        <form className='Signup-form'>
            <h2>About me!</h2>
            <p>
            I am a free-spirited and versatile person who seeks to explore everything life has to offer.
            I am passionate about customer service and technology and I strive to excel at everything. 
            I love singing and cooking; not just food but great ideas and great relationships!
            </p>

        </form>
        </div>
    )
}