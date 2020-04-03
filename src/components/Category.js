import React from 'react';
import './style.css';

function Category()
{
  let CategoryList=['Frontend-Web','Backend','Agile','Mixed','Quality','Database','FullStack','Soft-Skills'];
  let list=CategoryList.map((cat)=><option>{cat}</option>)
    return(<div>
        <label for="category" id="category1">Select Category:</label><br></br><br></br>
    <select id="category" required className="components" required>
        {list}
      </select><br></br><br></br>
      </div>        
        );
}
export default Category;