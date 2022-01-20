import React from "react";
import "./post.css";
import Radio from "../Radio";

// { posts }



function Post({ isComplete, week, link, tags, summary }) {
    
	return (
            <div className="post post-grid">
                <div className="post-header">
                    <Radio isComplete={isComplete}/>
                    <h4 className="post-title">?? Title ??</h4>
                    <p className="post-week">week {week}</p>
                </div>
        
                <p className="post-description">Summary: <a href={link}>{summary}</a></p>
                <p className="post-tags">Tag: {tags}</p>
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