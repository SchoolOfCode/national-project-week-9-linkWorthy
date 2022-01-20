import React, { useState } from 'react';
import './inputs.css';

function Inputs({ onSubmit }) {
    const [week, setWeek] = useState('');
    const [language, setLanguage] = useState('');
    const [link, setLink] = useState('');
    const [summary, setSummary] = useState('');
    
    function handleWeek(event) {
        // event.preventDefault();
        const aWeek = event.target.value;
        setWeek(aWeek);
    }
    function handleLanguages(event) {
        // event.preventDefault();
        const topic = event.target.value;
        setLanguage(topic);
    }
    function handleLink(event) {
        // event.preventDefault();
        const link = event.target.value;
        setLink(link);
    }
    function handleSummary(event) {
        // event.preventDefault();
        const summary = event.target.value;
        setSummary(summary);
    }

    
    return(
        <div className="form">
            <label> Week Number   
            </label>
                <input className="form-input" type='text' onChange={handleWeek} />
            <label> Languages   
            </label>
                <input className="form-input" type='text' onChange={handleLanguages}/>
            <label> Useful link  
            </label>
                <input className="form-input" type='text' onChange={handleLink}/>
            <label> Summary  
            </label>
                <textarea className="form-input" type='text' onChange={handleSummary} placeholder='Your summary' />
            <br/>
            <button onClick={() => onSubmit(week, language, link, summary, setWeek, setLanguage, setLink, setSummary)}>Submit</button>
        </div>  
    )
}

export default Inputs;