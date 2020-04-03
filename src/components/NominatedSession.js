import React from 'react';
import Category from './Category';
import Level from './Level';
import Session from './SessionFormat';
import './style.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

 

function NominatedSession()
    {
    return(<div>
        <Navbar/>
        <Sidebar/>
        <h1>Nominate for the session</h1>
    <form>
      <h3>Fill Out Session Nomination Form</h3><br></br>
    <label for="topictitle">Topic Title:</label><br></br>
    <textarea id="topictitle" rows="2" cols="60" placeholder="Session that you are planning" required></textarea><br></br><br></br>

    <label for="outcome">What Are The Learning Outcome?<i> (optional)</i></label><br></br>
    <textarea id="outcome" rows="3" cols="60" placeholder="Add Description"></textarea><br></br>

    <label for="keywords">Keywords:</label><br></br>
    <textarea id="keywords" rows="2" cols="60" required></textarea><br></br><br></br>

  
    <label for="speakername">Speaker Name:</label><br></br>
    <input type="text" id="speakername" required/><br></br>
    <br></br>
    <Category/>
     
    <Level/>
    <Session/>
    <label for="additionalnotes">Any Additional Notes <i>(optional)</i></label><br></br>
    <textarea id="address" rows="3" cols="60"></textarea><br></br><br></br>
    <div className="buttons">
    <button type="reset" id="cancel">Cancel</button>
    <button type="submit" id="submit">Submit</button>
    
    </div>
  </form>
  </div>
    );}
export default NominatedSession;