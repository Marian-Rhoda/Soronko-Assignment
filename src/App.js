import React from 'react';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Navigbar from './components/Navigbar.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js'

import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css'

function App() {
  return(
    <main>
      <h1 className='life'>Lifestyle with M-R</h1>
      <Router>
        
         <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
              <Route path='/Home' component={Home} />
              <Route path='/Signup' component={Signup} />
      
         </Switch>

      </Router>
    </main>
)
};

export default App;
