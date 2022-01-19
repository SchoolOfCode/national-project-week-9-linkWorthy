import React, { useState } from 'react';
import './sidebar.css';

// import {
//   BrowserRouter as Router,
// //   Switch,
// //   Route,
//   Link
// } from "react-router-dom";

function Sidebar( { id, topic } ) {
    // console.log(newData)
    // const [focus, setFocus] = useState(false);


    // function focusLink() {
    //     setFocus(!focus);
    // }

    // let week = newData.map(week => <Link key={week.id} to={`/week${week.id}`} className={!focus ? "link-week": "link-active"} onClick={focusLink}>`Week ${week.id} - ${week.topic}`</Link>);

    return(
        <div className="sidebar">
            
            <p className="link-week">Week ${id} - ${topic}</p>
           
            
            {/* 
            {/* <Link to='/week1' className={!focus ? "link-week": "link-active"} onClick={focusLink}>Week 1 - Foundation</Link>
            
            <Link to='/week3' className="link-week">Week 3 - Front End</Link> */}
            
            
           
        </div>
    )
}

export default Sidebar;