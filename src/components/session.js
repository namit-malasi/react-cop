import React from 'react';
import './style.css';
function Session()
{
    return(
        <div>
        <label for="typeofsession">What Type Of Format Session It Is?</label><br></br><br></br>
    <select id="typeofsession" required className="components">
        <option value="presentation">Presentation</option>
        <option value="live-coding">Live Coding</option>
        <option value="workshop">Workshop</option>
        <option value="open-discussion">Open Discussion</option>
        <option value="projectcasestudy">Project Case-Study</option>
        <option value="tobedetermined">To BE Determined</option>
        <option value="fullstack">Full Stack</option>
        <option value="opendiscussionvideo">Open Discussion + Video</option>
      </select><br></br><br></br></div>
    );
}
export default Session;