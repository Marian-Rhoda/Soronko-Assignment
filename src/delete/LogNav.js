import React from "react";
// import './styles.css';
import {Link} from 'react-router-dom';

export default function LogNav() {

    return (

        <div className="Lognav">
            <nav>
                <ul> 
                    <Link to='/'><li>Login</li></Link>
                    <Link to='/Signup'><li>Signup</li></Link>
                
                </ul>
            </nav>
        </div>
    )

}

