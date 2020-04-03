import React from 'react';
import './style.css';
function Session()
{
    let SessionList=['Presentation','Live Coding','Workshop','Open Discussion','Project Case-Study','To Be Determined','Full Stack','Open Discussion + Video'];
  let list=SessionList.map((cat)=><option>{cat}</option>)
    return(
        <div>
        <label for="typeofsession">What Type Of Format Session It Is?</label><br></br><br></br>
    <select id="typeofsession" required className="components" required>
      {list}
      </select><br></br><br></br></div>
    );
}
export default Session;