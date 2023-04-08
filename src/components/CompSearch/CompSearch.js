import React from 'react';
import './CompSearch.css';

function CompSearch(){
    return (
        
        <div>
<input className='moja' type="text" placeholder="Szukaj.."/>
<button class="btn btn-light mb-1">Wyszukaj</button>
<img className='picClass' src="avatar.png" alt="Italian Trulli"></img>
<i class="myclass2 fa fa-cog fa-2x"></i>
        </div>
        
   
/* <div class="input-group rounded ">
  <input type="CompSearch" class="moja rounded"  placeholder="CompSearch" aria-label="CompSearch"/>
  <span class="input-group-text border-0" id="CompSearch-addon">
  wyszukaj
  </span>
</div>  */
      )
}

export default CompSearch;