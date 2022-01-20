import React, { useState } from 'react';
import './sidebar.css';

// import {
//   BrowserRouter as Router,
// //   Switch,
// //   Route,
//   Link
// } from "react-router-dom";

function Sidebar( { newData, handleWeekId } ) {
    console.log(newData)
    const [focus, setFocus] = useState(false);


    function focusLink() {
        setFocus(!focus);
    }

    return(
        <div className="sidebar">
            {Object.values(newData).map((week) => 
        (<p key={week.id} className="link-week" onClick={() => handleWeekId(week.id)}>Week {week.id} - {week.topic}</p>))}

        </div>
    )
}
export default Sidebar;

{/* <Router>
            
            <Link to='/weeks/1' className={!focus ? "link-week": "link-active"} onClick={focusLink}>Week 1 - Foundation</Link>
           
           <Link to='/weeks/3' className="link-week">Week 3 - Front End</Link>
           </Router> */}