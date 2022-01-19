import React from 'react';
import './App.css';

import Header from '../Header';
import Sidebar from '../Sidebar';
// import Posts from '../Posts';
import AddAnItemForm from '../AddAnItemForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <AddAnItemForm />
    </div>
  );
}

export default App;
