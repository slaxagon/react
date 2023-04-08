import React, { useState } from 'react';
import './counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count +1);
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default Counter;