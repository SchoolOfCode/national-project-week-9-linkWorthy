import React from "react";
import ResourcesListItem from "../ResourcesListItem";
import "./styles.css";

function ResourcesList({ posts }) {
	return (
		<div className="posts">
			{posts.map(function (post) {
				return <ResourcesListItem {...post} key={post.id} />;
			})}
		</div>
	);
}

export default ResourcesList;
