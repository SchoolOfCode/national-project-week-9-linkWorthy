import React from "react";
import "./styles.css";
import WeekItem from "../WeekItem";

function Sidebar({ weeks, handleWeekRender }) {
	return (
		<div className="sidebar">
			<div>
				{weeks.map(function (week) {
					return (
						<WeekItem
							{...week}
							key={week.id}
							handleWeekRender={handleWeekRender}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default Sidebar;
