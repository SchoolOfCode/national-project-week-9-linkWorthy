import React from "react";
import "./header.css";
import logo from "../pics/logo.png";

function Header() {
	return (
		<div className="header">
			<img src={logo} className="logo" alt="School of Code Logo" />
			<div className="header-titles">
				<h1 className="title">[our app name]</h1>
				<h3 className="sub-title">
					a home for all your school of code bookmarks and musings
				</h3>
			</div>
		</div>
	);
}

export default Header;
