import React from "react";
import Post from "./Post";
import "./styles.css";

function Posts({ posts }) {
	return (
		<div className="posts">
			{Object.values(posts).map((card, index) => (
				<Post
					key={index}
					isComplete={card.iscomplete}
					week={card.week}
					link={card.link}
					tags={card.tags}
					summary={card.summary}
				/>
			))}
		</div>
	);
}

export default Posts;
