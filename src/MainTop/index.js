import React from "react";
import "./styles.css";

function MainTop({weekId, weekTopic}) {
	return (
			<div >
				
				<h2>WEEK {weekId}</h2>
				<p className="topic-title">{weekTopic}</p>
			</div>
	
	);
}

export default MainTop;


// {if(!weekId || !weekTopic) {
// 	<div >
// 	<h2 style={{display: none;}}>WEEK {weekId}</h2>
// 	<p className="topic-title">{weekTopic}</p>
// 	</div>
// }}