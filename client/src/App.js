import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import { MockUp } from './pages/MockUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <div>
        <div>
          <Nav/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/MockUp" element={<MockUp/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
