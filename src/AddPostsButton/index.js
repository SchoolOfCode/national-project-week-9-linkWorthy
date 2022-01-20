import React from "react";
import "./styles.css";

function AddPostsButton({ handleFormPage }) {
	return (
		<div className="create-button-div">
			<button className="create-button" onClick={handleFormPage}>CREATE A POST</button>
		</div>
	);
}

export default AddPostsButton;
