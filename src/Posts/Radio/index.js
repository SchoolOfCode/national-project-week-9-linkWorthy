import React, { useState } from 'react';
import '../Post/post.css';




function Radio() {
    const [complete, setComplete] = useState(false);

    function completeHandle() {
        setComplete(!complete);
    }

    return(
            <input className="radio-atribute" type="checkbox" onChange={completeHandle}/>
    )
}

export default Radio;