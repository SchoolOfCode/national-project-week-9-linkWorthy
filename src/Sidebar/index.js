import React from "react";
import "./sidebar.css";
// { useState }
// import {
//   BrowserRouter as Router,
// //   Switch,
// //   Route,
//   Link
// } from "react-router-dom";

function Sidebar({ newData, handleWeekId }) {
	// console.log(newData);
	// const [focus, setFocus] = useState(false);

	// function focusLink() {
	// 	setFocus(!focus);
	// }

	// let week = newData.map(week => <Link key={week.id} to={`/week${week.id}`} className={!focus ? "link-week": "link-active"} onClick={focusLink}>`Week ${week.id} - ${week.topic}`</Link>);

	return (
		<div className="sidebar">
			{Object.values(newData).map((week) => (
				<div key={week.id} className="week-div" onClick={() => handleWeekId(week.id, week.topic)}>
					<p className="link-week">WEEK {week.id}</p>
					<p className="link-topic">{week.topic}</p>
				</div>
            ))}
		</div>
	);

}
export default Sidebar;


/* <Router>
            
     <Link to='/weeks/1' className={!focus ? "link-week": "link-active"} onClick={focusLink}>Week 1 - Foundation</Link> 
     <Link to='/weeks/3' className="link-week">Week 3 - Front End</Link>
  </Router> */

