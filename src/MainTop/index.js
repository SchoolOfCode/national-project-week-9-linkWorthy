import React from "react";
import "./styles.css";

function MainTop({weekId, weekTopic}) {
	return (
		<div>
			<div>
				<h2>WEEK {weekId}</h2>
				<p className="topic-title">{weekTopic}</p>
			</div>
		</div>
	);
}

export default MainTop;
