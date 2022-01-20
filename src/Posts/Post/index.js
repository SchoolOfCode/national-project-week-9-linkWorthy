import React from "react";
import "./post.css";


// { posts }
// import Radio from "../Radio";


function Post() {
	return (
		<div className="post post-grid">
			<div className="post-header">
				{/* <Radio /> */}
				<h4 className="post-title">
					<span className="material-icons">check_circle</span>Title
				</h4>
				<p className="post-week">week 1</p>
			</div>
			<p className="post-description">Description</p>
			<p className="post-links">Links</p>
			<p className="post-tags">Tag</p>
		</div>
	);
}

export default Post;

//=================================== Some Info to Create Posts ========================================
// Object.values(posts).map(card => 
//     (<div className="post post-grid">
//         <div className="post-header">
//             <Radio isComplete={card.iscomplete}/>
//             <h4 className="post-title">?? Title ??</h4>
//             <p className="post-week">week {card.week}</p>
//         </div>

//         <p className="post-description">Summary: {card.summary}</p>
//         <p className="post-links">Link: {card.link}</p>
//         <p className="post-tags">Tag: {card.tags}</p>
//     </div>))
    
