import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import Header from './components/Header/Header';
import Opening from './components/Opening';
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <Opening></Opening>
      <Header></Header>
      <div className="gallery-container">
        <MenuBar></MenuBar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
