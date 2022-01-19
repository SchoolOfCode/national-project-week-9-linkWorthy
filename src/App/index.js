import React, { useState, useEffect } from "react";
import "./App.css";
import { API_URL } from "../Config";

import Header from "../Header";
import Sidebar from "../Sidebar";
// import Posts from '../Posts';
// import AddAnItemForm from '../AddAnItemForm';
import Posts from "../Posts";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
	const [newData, setNewData] = useState({});
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	// const [posts, setPosts] = useState(null);

	// async function getWeeks() {
	//   const response = await fetch(`${API_URL}/weeks`);
	//   const data = await response.json();
	//   setNewData(data);
	// }

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
				setNewData(data.payload);
				setError(null);
			})
			.catch((err) => {
				//auto catches network / connection error
				setIsPending(false);
				setError(err.message);
			});
	}, []);

	console.log(newData);

	// console.log(newData[0].id);
	// const weekOne = newData.filter(week => week.id === 1);

	// useEffect(() => {
	//   fetch(`${API_URL}/weeks/1`)
	//   .then(res => {
	//     if (!res.ok) {
	//       throw Error('could not fetch the data for for that resourse');
	//     }
	//     return res.json();
	//   })
	//   .then(data => {
	//     setIsPending(false);
	//     setPosts(data);
	//     setError(null);
	//   })
	//   .catch(err => {
	//     //auto catches network / connection error
	//     setIsPending(false);
	//     setError(err.message);
	//   })
	// }, [newData]);

	// getWeeks();
	// console.log(weekOne);

	// useEffect

	return (
		<div className="App">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{/* {newData && <Post data={newData}/>} */}

			<Header />
			{/* <Sidebar /> */}
			<div className="left">
				<Sidebar newData={newData} />
			</div>

			{/* <AddAnItemForm /> */}

			<Posts />
		</div>
	);
}

export default App;
