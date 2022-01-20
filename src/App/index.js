import React, { useState, useEffect } from "react";
import "./App.css";
import { API_URL } from "../Config";

import Header from "../Header";
import Sidebar from "../Sidebar";
import MainTop from "../MainTop";
import AddPostsButton from "../AddPostsButton";
// import Posts from '../Posts';
import AddAnItemForm from '../AddAnItemForm';
import Posts from "../Posts";

function App() {

	const [newData, setNewData] = useState({});
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [posts, setPosts] = useState({});
	const [weekId, setWeekId] = useState(0);
	const [weekTopic, setWeekTopic] = useState('');
	const [newPost, setNewPost] = useState({});

	
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



	useEffect(() => {
	  fetch(`${API_URL}/weeks/${weekId}/resources`)
	  .then(res => {
	    if (!res.ok) {
	      throw Error('could not fetch the data for for that resourse');
	    }
	    return res.json();
	  })
	  .then(data => {
	    setIsPending(false);
	    setPosts(data.payload);
	    setError(null);
	  })
	  .catch(err => {
	    //auto catches network / connection error
	    setIsPending(false);
	    setError(err.message);
	  })
	}, [weekId]);

	// getWeeks();
	// console.log(weekOne);

	// useEffect

//================================There are some Sidebar values =====================================
	function handleWeekId(id, topic) {
		setWeekId(id);
		setWeekTopic(topic);
	}
	const [aaif, setAaif] = useState();
	const [button, setButton] = useState(false);	
	function handleFormPage() {
		setButton(!button);
		if(button) {
			setAaif(<AddAnItemForm onSubmit={onSubmit}/>);
		} else {
			setAaif();
		}
	}

	function onSubmit(week, language, link, summary, setWeek, setLanguage, setLink, setSummary) {
		const templatePost = {
			week: week,
			tags: language,
			summary: summary,
			link: link,
			iscomplete: false
			}
			
			setWeek('');
			setLanguage('');
			setLink('');
			setSummary('');

		if(templatePost) {
			setNewPost(templatePost);
		} else {
			return null;
		} 
		 
		console.log(newPost)
	}


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
					  <MainTop weekId={weekId} weekTopic={weekTopic}/>
					  <AddPostsButton handleFormPage={handleFormPage}/>
				  </div>
				  <Posts posts={posts}/>
			  		  {aaif}
          		</div>
			</div>
	  );
  }

/* <Sidebar newData={newData} handleWeekId={handleWeekId}/> */
/* <AddAnItemForm onSubmit={onSubmit}/> */
/* <Posts posts={posts} /> */


//================================There are some AddAnItemForm values =====================================
//const [newPost, setNewPost] = useState({});

// function onSubmit(language, link, summary) {
// 	const templatePost = {
// 		week: {id},
// 		language: language,
// 		link: link,
// 		summary: summary
// 	}
// 	templatePost ? setNewPost(templatePost) : null;
// }

export default App;
