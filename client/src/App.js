<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { MockUp } from './pages/MockUp';

function App() {
  return (
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/MockUp" element={<MockUp/>}/>
            </Routes>
          </div>
        </div>
      </Router>
>>>>>>> 3a02969473ef698b0251f4fc03b10a6b9e1280f4
  );
}

export default App;
