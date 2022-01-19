import React from 'react';
import './inputs.css';

function Inputs() {
    return(
        <div className="form">
            <label> Note's topic  
            </label>
                <input className="form-input" type='text' name='topic'/>
            <label> Used languages   
            </label>
                <input className="form-input" type='text' name='language'/>
            <label> Useful links  
            </label>
                <input className="form-input" type='text' name='links'/>
            <label> Summary  
            </label>
                <textarea className="form-input" type='text' name='summary' placeholder='Your summary' />
            <br/>
            <button>Submit</button>
        </div>  
    )
}

export default Inputs;