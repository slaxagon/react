import React from 'react';
import './Comp5.css';

function Comp5(){
    return (
        <li className="com-5-flex-item rounded">
            <div className='com-5-parentDiv'>
            <span class="com-5-icon1">
            <i class="fa fa-paypal fa-2x com-5-iclass" aria-hidden="true"></i>
            </span>
            <span class="com-5-icon2">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
            </div>
            <div>
                <h5>Ostatni wydatek</h5>
                <h4>$7,389</h4>
                <span className='com-5-span'><i class="fa fa-arrow-down" aria-hidden="true"></i> -5,83%</span>
            </div>
        </li>  
       )
}

export default Comp5;