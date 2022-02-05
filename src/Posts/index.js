import React from "react";
import Post from "./Post";
import "./styles.css";

function Posts({ posts, handleDelete }) {
	return (
		<div className="posts">
			{posts.map((card, index) => (
				<Post
					key={index}
					id={card.id}
					isComplete={card.iscomplete}
					week={card.week}
					link={card.link}
					tags={card.tags}
					summary={card.summary}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
}

export default Posts;
