import React from "react";
import "./post.css";
import Radio from "../Radio";

// { posts }

function Post({ isComplete, week, link, tags, summary }) {
	return (
		<div className="post post-grid">
			<div className="post-header">
				<Radio isComplete={isComplete} />
				<p className="post-week">
					<span class="material-icons-outlined material-icons delete-button">
						clear
					</span>
				</p>
			</div>

			<p className="post-description">
				<p>
					<span class="material-icons-outlined material-icons">link</span>
				</p>
				<a className="post-description-link" href={link}>
					{summary}
				</a>
			</p>
			<p className="post-tags">
				<span className="tags-span">{tags}</span>
			</p>
		</div>
	);
}

export default Post;

//=================================== Some Info to Create Posts ========================================

// <div className="post post-grid">
// 			<div className="post-header">
// 				{/* <Radio /> */}
// 				<h4 className="post-title">
// 					<span className="material-icons">check_circle</span>Title
// 				</h4>
// 				<p className="post-week">week 1</p>
// 			</div>
// 			<p className="post-description">Description</p>
// 			<p className="post-links">Links</p>
// 			<p className="post-tags">Tag</p>
// 		</div>
