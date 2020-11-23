import React, {useState} from 'react';
import Home from './Home.js';
import {Link} from 'react-router-dom';

// import Signup from './components/Signup.js'
// import download from './download.png';
// import './Login.css';

function Login(props) {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [LoggedIn, setLoggedIn]= useState(false)

    const handleEmailInput =(event) => {
        setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }


    function handleLoggedIn(event) {
        event.preventDefault();
        if (email === "marianrhoda@gmail.com" && password === "1301")
          setLoggedIn(true)
        
        // if (email !== "marianrhoda@gmail.com" || password !== "1301")
        //   setLoggedIn(false)        
 
                        
                    

                      

            

    
          
    }

    function handleLogout(event) {
        event.preventDefault();
        setLoggedIn(false)
    }

    return(

        <div>{

        
            LoggedIn
              ?
              <>
                <p> Welcome Marian-Rhoda</p>
                <Home/>
                <button onClick= {handleLogout}>Logout</button>
              </>
              :
              
            

              <>
             
          
    
           <header className= 'Login-header'>
           <h1>Lifestyle With M-R</h1>
           <h2>Sign In</h2>
            {/* {<img src={download} className= "Login=logo" alt= 'download'/>} */}
            
           </header>
               <form className='Signup-form'>
                 <label>
                    Username:
                 </label>
                 <input type= "email" name= "username" value={email} onChange={handleEmailInput} />
                 <br></br>
                 <label>
                    Password:
                 </label>
                 <input type= "password" name= "password" value={password} onChange={(event) => handlePasswordInput(event) } />
                 <br></br>
                 <button onClick={handleLoggedIn}> Login </button>
                 <p>Dont have an account? <br></br></p>
                 <Link to= '/Signup'> <p>Create new account</p></Link>
               </form>

               </>

}

        </div>
    );

    

    
}

      
export default Login;