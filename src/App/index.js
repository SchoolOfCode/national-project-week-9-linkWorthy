import React, { useState, useEffect } from "react";
import "./App.css";
import { API_URL } from "../Config";

import Header from "../Header";
import Sidebar from "../Sidebar";
import SubHeading from "../SubHeading";
import AddPostsButton from "../AddPostsButton";
import AddAnItemForm from "../AddAnItemForm";
import Posts from "../Posts";

function App() {
	const [weeks, setWeeks] = useState([]);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [posts, setPosts] = useState({});
	const [weekId, setWeekId] = useState(0);
	const [weekTopic, setWeekTopic] = useState("");

	useEffect(() => {
		fetch(`${API_URL}/weeks`)
			.then((res) => {
				if (!res.ok) {
					throw Error("could not fetch the data for for that resourse");
				}
				return res.json();
			})
			.then((data) => {
				setIsPending(false);
				setWeeks(data.payload);
				setError(null);
			})
			.catch((err) => {
				//auto catches network / connection error
				setIsPending(false);
				setError(err.message);
			});
	}, []);

	useEffect(() => {
		fetch(`${API_URL}/weeks/${weekId}/resources`)
			.then((res) => {
				if (!res.ok) {
					throw Error("could not fetch the data for for that resourse");
				}
				return res.json();
			})
			.then((data) => {
				setIsPending(false);
				setPosts(data.payload);
				setError(null);
			})
			.catch((err) => {
				//auto catches network / connection error
				setIsPending(false);
				setError(err.message);
			});
	}, [weekId]);
	//================================There are some Sidebar values =====================================
	function handleWeekRender(id, topic) {
		setWeekId(id);
		setWeekTopic(topic);
	}
	const [aaif, setAaif] = useState();
	const [button, setButton] = useState(true);

	function handleFormPage() {
		if (button) {
			setAaif(<AddAnItemForm onSubmit={onSubmit} button={button} />);
			setButton(!button);
		} else {
			setAaif();
		}
	}

	// [START] TEMPORARY FIX TO RENEDER WEEK 1 ON MOUNT
	useEffect(() => {
		handleWeekRender(1, "Foundations");
	}, []);

	useEffect(() => {
		fetch(`${API_URL}/weeks/1/resources`)
			.then((res) => {
				if (!res.ok) {
					throw Error("could not fetch the data for for that resourse");
				}
				return res.json();
			})
			.then((data) => {
				setIsPending(false);
				setPosts(data.payload);
				setError(null);
			})
			.catch((err) => {
				setIsPending(false);
				setError(err.message);
			});
	}, []);
	// [END] TEMPORARY FIX TO RENEDER WEEK 1 ON MOUNT

	function onSubmit(language, link, summary, setLanguage, setLink, setSummary) {
		const templatePost = {
			tags: language,
			summary: summary,
			link: link,
			isComplete: false,
		};
		setAaif();
		fetch(`${API_URL}/weeks/${weekId}/resources`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(templatePost),
		})
			.then((res) => {
				if (!res.ok) {
					throw Error("could not fetch the data for for that resourse");
				}
				return res.json();
			})
			.catch((err) => {
				setIsPending(false);
				setError(err.message);
			});

		setLanguage("");
		setLink("");
		setSummary("");
	}
	return (
		<div className="App">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}

			<Header />
			<Sidebar weeks={weeks} handleWeekRender={handleWeekRender} />

			<div className="main">
				<div className="mid">
					{/* //Title top left  */}
					<SubHeading weekId={weekId} weekTopic={weekTopic} />
					<AddPostsButton
						handleFormPage={handleFormPage}
						button={button}
						weekId={weekId}
					/>
				</div>
				<Posts posts={posts} />
				{aaif}
			</div>
		</div>
	);
}

export default App;
