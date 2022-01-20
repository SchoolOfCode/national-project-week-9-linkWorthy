import React from "react";
import Posts from "../Posts";

import "./weekStyles.css";

function Week() {
	return (
		<div className="posts-container">
			<div className="posts">
				<Posts />
			</div>
		</div>
	);
}

export default Week;
