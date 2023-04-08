import React from 'react';
import './Comp4.css';

function Comp4(){
    return (

        <li className="com-4-flex-item rounded">
          <p className='com-4-firstField'>Diagram</p>
          <div className='com-4-divForText'>
          <img class="com-4-picClass2" src="pie_chart.png"></img>
          <select class="dropmenu" name="language" id="language">
  <option value="2021" disabled>2021</option>
  <option value="2020" disabled>2020</option>
  <option value="2022" disabled>2022</option>
  <option value="2019" selected>2019</option>
</select>
          </div>
        </li>

       )
}

export default Comp4;