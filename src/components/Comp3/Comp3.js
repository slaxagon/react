import React from 'react';
import './Comp3.css';

function Comp3(){
    return (
        <li className="com-3-flex-item rounded">
            <div className='com-3-parentDiv'>
            <span class="com-3-icon1">
            <i class="fa fa-money fa-2x com-3-iclass" aria-hidden="true"></i>
            </span>
            <span class="com-3-icon2">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
            </div>
            <div>
                <h5>Budżet</h5>
                <h4>$45,15478</h4>
                <span className='com-3-span'><i class="fa fa-arrow-up" aria-hidden="true"></i> +18,7%</span>
            </div>
        </li>  
       )
}

export default Comp3;