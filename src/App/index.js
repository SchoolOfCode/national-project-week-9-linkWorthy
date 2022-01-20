import React, { useState, useEffect } from "react";
import "./App.css";
import { API_URL } from "../Config";

import Header from "../Header";
import Sidebar from "../Sidebar";
import MainTop from "../MainTop";
import AddPostsButton from "../AddPostsButton";
import AddAnItemForm from '../AddAnItemForm';
import Posts from "../Posts";



function App() {

	const [newData, setNewData] = useState({});
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [posts, setPosts] = useState({});
	const [weekId, setWeekId] = useState(0);
	const [weekTopic, setWeekTopic] = useState('');
	const [aaif, setAaif] = useState();
	const [button, setButton] = useState(true);	

	const [rerenderTrigger, setRerenderTrigger] = useState(true);
	

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

	

//================================There are some Sidebar values =====================================
	function handleWeekId(id, topic) {
		setWeekId(id);
		setWeekTopic(topic);
	}
	
	function handleFormPage() {
		if(button) {
			setAaif(<AddAnItemForm onSubmit={onSubmit} button={button}/>);
			setButton(!button);
		} else {
			setAaif();
			setButton(!button);
		}
	}

	function onSubmit(language, link, summary, setLanguage, setLink, setSummary) {
		const templatePost = {
			"tags": language,
			"summary": summary,
			"link": link,
			"isComplete": false
			}
			
			setAaif();
			
			fetch(`${API_URL}/weeks/${weekId}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(templatePost),
			})
			.then(res => {
			  if (!res.ok) {
				throw Error('could not fetch the data for for that resourse');
			  }
			  return res.json();
			})
			.catch(err => {
			  //auto catches network / connection error
			  setIsPending(false);
			  setError(err.message);
			})
		
		
		setLanguage('');
		setLink('');
		setSummary('');
		setRerenderTrigger(!rerenderTrigger);
	}
	

	return (
		<div className="App">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
      		
			  <Header />
			<Sidebar newData={newData} handleWeekId={handleWeekId} />
			  
			<div className="main">
				<div className="mid">
					<MainTop weekId={weekId} weekTopic={weekTopic}/>
					<AddPostsButton handleFormPage={handleFormPage} button={button} weekId={weekId}/>
				</div>

				{aaif}
				<Posts posts={posts}/>
          	</div>

		</div>
	);
}





export default App;
