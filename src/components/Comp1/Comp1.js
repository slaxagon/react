import React from 'react';
import './Comp1.css';

function Comp1(){
    return (

        <li className="com-1-flex-item rounded">
          <p className='com-1-firstField'>Hej Arkadiusz! <i class="fa fa-smile-o"></i></p>
          <div className='com-1-divForText'>
          <p>Niezla robota, oby tak dalej!.</p>
          <img class="com-1-picClass2" src="ok.png"></img>
          </div>
          <button class="com-1-button">Sprawdź odznaki</button>
        </li>

       )
}

export default Comp1;