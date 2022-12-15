import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main>
      <div>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </main>
  );
};

export default Home;
