import React from 'react';
import './Sidebar.css';

function Sidebar()
{
    return(<div>
        <div id="container">
    <button id="nomination">+Nominate for session</button> 
    <a href="#">Sessions</a>   
    <a href="#">Mailing List</a> 
    <a href="#">Calender Invite</a> 
        </div>
        </div>
    );
}

export default Sidebar;