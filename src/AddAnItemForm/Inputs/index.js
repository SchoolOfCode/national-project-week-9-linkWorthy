import React, { useState } from 'react';
import './inputs.css';

function Inputs({ onSubmit }) {
    
    const [language, setLanguage] = useState('');
    const [link, setLink] = useState('');
    const [summary, setSummary] = useState('');
    
    
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
            <label> Languages   
            </label>
                <input className="form-input" type='text' onChange={handleLanguages} value={language}/>
            <label> Useful link  
            </label>
                <input className="form-input" type='text' onChange={handleLink} value={link}/>
            <label> Summary  
            </label>
                <textarea className="form-input" type='text' onChange={handleSummary} placeholder='Your summary' value={summary} maxLength="75"/>
            <br/>
            <button onClick={() => onSubmit(language, link, summary, setLanguage, setLink, setSummary)}>Submit</button>
        </div>  
    )
}

export default Inputs;