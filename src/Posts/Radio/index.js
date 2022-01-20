import React, { useState } from "react";
import "../Post/post.css";

function Radio({ isComplete }) {
	const [complete, setComplete] = useState(false);
	function completeHandle() {
		setComplete(!complete);
	}

	// if (complete) {
	// 	return "check_circle";
	// } else {
	// 	return "radio_button_unchecked";
	// }

	return (
		<div>
			<span
				class="material-icons-outlined material-icons"
				onChange={completeHandle}
			>
				{isComplete ? "check_circle" : "radio_button_unchecked"}
			</span>
			{/* <input
				className="radio-atribute"
				type="checkbox"
				onChange={completeHandle}
			/> */}
		</div>
	);
}

export default Radio;

// function Radio({ isComplete }) {
//     const [complete, setComplete] = useState(false);

//     function completeHandle() {
//         isComlete ? setComplete(isComplete) : setComplete(!complete);
//     }

//     return(
//             <input className="radio-atribute" type="checkbox" onChange={completeHandle} checked={complete}/>
//     )
// }
