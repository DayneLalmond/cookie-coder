import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Dashboard } from './components/Dashboard.js';
import { LoginForm } from './components/Login.js';
import { Editor } from './components/Editor.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <div>
        <div>
          <Nav/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Home" element={<Home />}/>
              <Route path="/Login" element={<LoginForm />}/>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Editor" element={<Editor/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
