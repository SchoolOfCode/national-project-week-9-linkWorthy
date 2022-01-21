import React from "react";

function WeekItem({ id, topic, handleWeekId }) {
	return (
		<div className="week-div" onClick={() => handleWeekId(id, topic)}>
			<p className="link-week">WEEK {id}</p>
			<p className="link-topic">{topic}</p>
		</div>
	);
}

export default WeekItem;
