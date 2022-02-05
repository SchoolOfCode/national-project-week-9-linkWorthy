import React from "react";
import WeeksList from "../WeeksList";
import "./styles.css";
// { useState }
// import {
//   BrowserRouter as Router,
// //   Switch,
// //   Route,
//   Link
// } from "react-router-dom";

function Sidebar({ weeks, handleWeekId }) {
	// console.log(newData);
	// const [focus, setFocus] = useState(false);

	// function focusLink() {
	// 	setFocus(!focus);
	// }

	// let week = newData.map(week => <Link key={week.id} to={`/week${week.id}`} className={!focus ? "link-week": "link-active"} onClick={focusLink}>`Week ${week.id} - ${week.topic}`</Link>);

	return (
		<div className="sidebar" id="sidebar">
			<WeeksList weeks={weeks} handleWeekId={handleWeekId} />
		</div>
	);
}
export default Sidebar;

/* <Router>
            
     <Link to='/weeks/1' className={!focus ? "link-week": "link-active"} onClick={focusLink}>Week 1 - Foundation</Link> 
     <Link to='/weeks/3' className="link-week">Week 3 - Front End</Link>
  </Router> */
