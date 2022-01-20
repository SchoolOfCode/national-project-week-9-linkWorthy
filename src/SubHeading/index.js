import React from "react";
import "./styles.css";

function SubHeading({ weekId, weekTopic }) {
	return (
		<div>
			<h2>WEEK {weekId}</h2>
			<p className="topic-title">{weekTopic}</p>
		</div>
	);
}

export default SubHeading;

// {if(!weekId || !weekTopic) {
// 	<div >
// 	<h2 style={{display: none;}}>WEEK {weekId}</h2>
// 	<p className="topic-title">{weekTopic}</p>
// 	</div>
// }}
