import React from 'react';
import MRhoda from './MRhoda.jpg';

export default function Contact() {

    return(
        <div className= 'contact'>
        <header className= 'contact-header'>
        <h1>Lifestyle With M-R</h1>
            {<img src={MRhoda} className= "contact=logo" alt= 'MRhoda'/>}
            
        </header>
        <form className='Signup-form'>
            <h1>Need any assistance?</h1>
            <p> Contact me on +233502502502</p>
            <br></br>
            <p>or</p><br></br>
            <p>Email me at mrak@lfestylewithmr.com</p>

        

        </form>
        </div>
    )
}