import React from "react";
import "./styles.css";
import WeekItem from "../Week";

function Sidebar({ weeks, handleWeekId }) {
	return (
		<div className="sidebar">
			<div>
				{weeks.map(function (week) {
					return (
						<WeekItem {...week} key={week.id} handleWeekId={handleWeekId} />
					);
				})}
			</div>
		</div>
	);
}
export default Sidebar;
