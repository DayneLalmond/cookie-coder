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
  );
}

export default App;
