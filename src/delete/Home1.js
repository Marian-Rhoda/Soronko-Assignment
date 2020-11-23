import React from 'react';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Home from '../components/Home.js'
import Navibar1 from '../components/Navigbar.js';

import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function Home1(){
    return(
        <main>
    
      <Router>
         <Navibar1 />
         <Switch>
              <Route path='/Home' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
      
         </Switch>
          
      </Router>
    </main>
    
    


    );
        
    


    

    
}

      
export default Home1;