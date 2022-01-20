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



// function Radio({ isComplete }) {
//     const [complete, setComplete] = useState(false);

//     function completeHandle() {
//         isComlete ? setComplete(isComplete) : setComplete(!complete);
//     }

//     return(
//             <input className="radio-atribute" type="checkbox" onChange={completeHandle} checked={complete}/>
//     )
// }