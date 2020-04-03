import React from 'react';
import './style.css';

function level()
{
  let LevelList=['Beginner','Intermediate','Advanced'];
  let list=LevelList.map((cat)=><option>{cat}</option>)
    return( <div><label for="level">Level:</label><br></br><br></br>
    <select id="level" required className="components" required>
        {list}
      </select><br></br><br></br>
      </div>
    );
}
export default level;