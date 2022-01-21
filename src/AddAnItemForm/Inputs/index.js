import React, { useState } from "react";
import "./inputs.css";

function Inputs({ onSubmit }) {
	const [language, setLanguage] = useState("");
	const [link, setLink] = useState("");
	const [summary, setSummary] = useState("");

	function handleLanguages(event) {
		// event.preventDefault();
		const topic = event.target.value;
		setLanguage(topic);
	}
	function handleLink(event) {
		// event.preventDefault();
		const link = event.target.value;
		setLink(link);
	}
	function handleSummary(event) {
		// event.preventDefault();
		const summary = event.target.value;
		setSummary(summary);
	}

	return (
		<div className="form">
			{/* <label> Summary</label> */}
			<textarea
				className="form-textarea"
				type="text"
				onChange={handleSummary}
				placeholder="Enter a short description of your bookmark"
				value={summary}
				maxLength="75"
			/>
			{/* <label> Useful link</label> */}
			<input
				className="form-input"
				type="text"
				placeholder="Enter a URL"
				onChange={handleLink}
				value={link}
			/>
			{/* <label> Languages</label> */}
			<input
				className="form-input"
				type="text"
				onChange={handleLanguages}
				placeholder="Add a tag"
				value={language}
			/>
			<br />
			<button
				className="form-submit-button"
				onClick={() =>
					onSubmit(language, link, summary, setLanguage, setLink, setSummary)
				}
			>
				SUBMIT
			</button>
		</div>
	);
}

export default Inputs;
