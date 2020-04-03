import React from 'react';
import './Navbar.css';
import logo from './3PG logo.svg';
import logo1 from './COP logo.svg';

function Navbar()
{
    return(<div>
        <nav>
        <a href="#"><img src={logo}></img></a>
        <a href="#"><img src={logo1}></img></a>
        <hr></hr>
            <ul>
                <li>About COP</li>
                <li>COP vertical</li>
                <li>Help</li>
                <li>Feedback</li>
                <li>Contact us</li>
            </ul>
        </nav>

    </div>);
}

export default Navbar;