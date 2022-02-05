import React, { useState, useEffect } from "react";
import "./App.css";
import { API_URL } from "../Config";

import Header from "../Header";
import Sidebar from "../Sidebar";
import SubHeading from "../SubHeading";
import AddPostsButton from "../AddPostsButton";
// import Posts from '../Posts';
import AddAnItemForm from "../AddAnItemForm";
import Posts from "../Posts";

function App() {
	const [newData, setNewData] = useState([]);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState("");
	const [isPending, setIsPending] = useState(true);
	const [posts, setPosts] = useState([]);
	const [weekId, setWeekId] = useState(0);
	const [weekTopic, setWeekTopic] = useState("");
	// const [trigger, setTrigger] = useState(true);

	const [showAAIFModal, setShowAAIFModal] = useState(false);
	// async function getWeeks() {
	//   const response = await fetch(`${API_URL}/weeks`);
	//   const data = await response.json();
	//   setNewData(data);
	// }

	useEffect(() => {
		async function getWeeks() {
			await fetch(`${API_URL}/weeks`)
				.then((res) => {
					if (!res.ok) {
						throw Error("could not fetch the data for for that resourse");
					}
					return res.json();
				})
				.then((data) => {
					setIsPending(false);
					setNewData(data.payload);
					setError(null);
				})
				.catch((err) => {
					//auto catches network / connection error
					setIsPending(false);
					setError(err.message);
				});
		}
		getWeeks();
	}, []);

	useEffect(() => {
		async function getPosts() {
			await fetch(`${API_URL}/weeks/${weekId}/resources`)
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
		}
		getPosts();
	}, [weekId]);

	// getWeeks();
	// console.log(weekOne);

	// useEffect

	//================================ There are some Sidebar values =====================================
	function handleWeekId(id, topic) {
		setWeekId(id);
		setWeekTopic(topic);
	}
	const [aaif, setAaif] = useState();
	// const [button, setButton] = useState(true);

	// function handleFormPage() {
	// 	if (button) {
	// 		setAaif(<AddAnItemForm onSubmit={onSubmit} button={button} />);
	// 		setButton(!button);
	// 	} else {
	// 		setAaif();
	// 		setButton(!button);
	// 	}
	// }

	//===================================== Delete Handler ===========================================

	async function handleDelete(id, week) {
		await fetch(`${API_URL}/weeks/${week}/resources/${id}`, {
			method: "DELETE",
		});
		setStatus("Delete successful!");

		const updatedPosts = posts.filter((post) => post.id !== id);
		setPosts(updatedPosts);
	}
	console.log(status);

	// [START] TEMPORARY FIX TO RENEDER WEEK 1 ON MOUNT
	useEffect(() => {
		handleWeekId(1, "Foundations");
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
				//auto catches network / connection error
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
		//===========================================
		// setTrigger(!trigger);
		//===========================================
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
				//auto catches network / connection error
				setIsPending(false);
				setError(err.message);
			});

		setLanguage("");
		setLink("");
		setSummary("");
	}

	console.log(posts);

	return (
		<div className="App">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{/* {newData && <Post data={newData}/>} */}

			<Header />
			<Sidebar newData={newData} handleWeekId={handleWeekId} />

			<div className="main">
				<div className="mid">
					{/* //Title top left  */}
					<SubHeading weekId={weekId} weekTopic={weekTopic} />
					{aaif}
					<AddPostsButton
						handleFormPage={() => setShowAAIFModal(true)}
						// button={button}
						weekId={weekId}
					/>
				</div>

				<Posts posts={posts} handleDelete={handleDelete} />
				<AddAnItemForm
					onSubmit={onSubmit}
					showModal={showAAIFModal}
					setShowModal={setShowAAIFModal}
				/>
			</div>
		</div>
	);
}

export default App;
