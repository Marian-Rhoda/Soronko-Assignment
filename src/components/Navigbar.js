import React from "react";
import '../style/navigbar.css';
import {Link} from 'react-router-dom';

export default function Navigbar1() {

    return (

        <div className="Navv">
            <nav>
                <ul> 
                    <Link to='/Home'><li>Home</li></Link>
                    <Link to='/About'><li>About</li></Link>
                    <Link to='/Contact'><li>Contact</li></Link>
                    <Link to='/'><li>Login</li></Link>
                    <Link to='/Signup'><li>Signup</li></Link>
                </ul>
            </nav>
        </div>
    )

}
