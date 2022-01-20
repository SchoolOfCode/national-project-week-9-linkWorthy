
import React from "react";
import Post from "./Post";
import "./posts.css";


// { posts }

function Posts({ posts }) {
	
    return (
		<div className="posts">
            


            {/* <Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post /> */}
           {Object.values(posts).map((card, index) =>  <Post key={index} isComplete={card.iscomplete} week={card.week} link={card.link} tags={card.tags} summary={card.summary}/>)}
		</div>
	);

}

export default Posts;
