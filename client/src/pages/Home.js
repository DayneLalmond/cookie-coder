import React from "react";
import background from '../images/bg21.png';
import Navbar from '../components/NavClipboard';
import Clipboard from './Clipboard';
import Login from "./Login";
import Signup from "./Signup";


const Home = () => {
  //make it so the page can switch between selecting
  //login and signup or neither try this link Render document by id
  //https://stackoverflow.com/questions/51412139/how-do-you-swap-out-a-component-in-react
  return (
    <main>
      <Navbar></Navbar>
      <div>
        <img src={background} alt="cookie coder background" width="100%" />
        <Clipboard></Clipboard>
      </div>
      <div id="check">

      </div>
    </main>
  );
};

export default Home;
