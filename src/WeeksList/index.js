import WeekItem from "../WeekItem";

function WeeksList({ weeks, handleWeekId }) {
	return (
		<div>
			{weeks.map((week) => (
				<WeekItem week={week} handleWeekId={handleWeekId} />
			))}
		</div>
	);
}

export default WeeksList;
