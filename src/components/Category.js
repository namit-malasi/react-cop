import React from 'react';
import './style.css';

function Category()
{
    return(<div>
        <label for="category" id="category1">Select Category:</label><br></br><br></br>
    <select id="category" required className="components">
        <option value="frontend-web">Frontend-Web</option>
        <option value="backend">Backend</option>
        <option value="agile">Agile</option>
        <option value="mixed">Mixed</option>
        <option value="quality">Quality</option>
        <option value="database">Database</option>
        <option value="fullstack">Full Stack</option>
        <option value="softskills">Soft Skills</option>
      </select><br></br><br></br>
      </div>        
        );
}
export default Category;