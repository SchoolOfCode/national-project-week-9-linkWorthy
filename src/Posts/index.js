
import React from "react";
import Post from "./Post";
import "./posts.css";

// { posts }

function Posts() {
	return (
		<div className="posts">
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
      {/* <Post posts={posts}/> */}
		</div>
	);

}

export default Posts;
