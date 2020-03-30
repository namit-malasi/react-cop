import React from 'react';
import Category from './Category';
import Level from './level';
import Session from './session';
import './style.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Topcomponent()
{
    return(<div>
        <Navbar/>
        <Sidebar/>
        <h1>Nominate for the session</h1>
    <form>
      <h3>Fill Out Session Nomination Form</h3>
    <label for="topictitle">Topic Title:</label><br></br>
    <textarea id="topictitle" rows="2" cols="60" placeholder="Session that you are planning"></textarea><br></br><br></br>

    <label for="outcome">What Are The Learning Outcome?<i> (optional)</i></label><br></br>
    <textarea id="outcome" rows="3" cols="60" placeholder="Add Description"></textarea><br></br>

    <label for="keywords">Keywords:</label><br></br>
    <textarea id="keywords" rows="2" cols="60"></textarea><br></br><br></br>

  
    <label for="speakername">Speaker Name:</label><br></br>
    <input type="text" id="speakername"/><br></br>
    <br></br>
    <Category/>
    <Level/>
    <Session/>
    <label for="additionalnotes">Any Additional Notes <i>(optional)</i></label><br></br>
    <textarea id="address" rows="3" cols="60"></textarea><br></br><br></br>
    
    <button type="submit" id="submit">Submit</button>
    <button type="reset" id="cancel">Cancel</button>
  </form>
  </div>
    );

}

export default Topcomponent;