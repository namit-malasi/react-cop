import React from 'react';
// import './style.css';

function level()
{
    return( <div><label for="level">Level:</label><br></br><br></br>
    <select id="level" required className="components" >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select><br></br><br></br>
      </div>
    );
}
export default level;