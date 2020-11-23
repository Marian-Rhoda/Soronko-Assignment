import React from 'react';
import Author from './Author.js';
import Button from './Button.js';
import eggs from '../images/eggs.jpg'
import '../style/post1.css'

function Post1() {

    return(
        <div className='post1' class="column">
        

             {<img src={eggs} className= "eggs" alt= 'eggs'/>}
            <h3>Perfect food ideas with egg</h3>
            <h4>Eggs are nutricious and sumptious </h4> 
            <h6><Author /></h6>
            <Button />

        
            
            
            
            

        </div>

        
        
    );
}

export default Post1;