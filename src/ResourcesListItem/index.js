import React from "react";
import "./styles.css";
import CompletionButton from "../CompletionButton";

function ResourcesListItem({ isComplete, week, link, tags, summary }) {
	return (
		<div className="post post-grid">
			<div className="post-header">
				<CompletionButton isComplete={isComplete} />
				<div className="post-week">
					<span className="material-icons-outlined material-icons delete-button">
						clear
					</span>
				</div>
			</div>
			<div className="post-description">
				<p>
					<span className="material-icons-outlined material-icons">link</span>
				</p>
				<div className="word-wrap">
					<a
						className="post-description-link"
						href={link}
						rel="noopener noreferrer"
						target="_blank"
					>
						{summary}
					</a>
				</div>
			</div>
			<p className="post-tags">
				<span className="tags-span">{tags}</span>
			</p>
		</div>
	);
}

export default ResourcesListItem;
