import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
