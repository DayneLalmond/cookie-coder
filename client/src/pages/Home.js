import React from "react";
import Footer from "../images/footer.png";
import Accordion from "../components/Accordion";
import HomeHeader from "../images/homeBlue.png";
import { Donate } from "../components/Donate";


const Home = () => {
  return (
    <main>
      <div>
      <img src={HomeHeader} className="App-logo" alt="logo" height="100px"/>
      </div>
    
      <div>
        <Accordion />
      </div>

      <div>
        <Donate />
      </div>

      <div>
        <img src={Footer} className="App-logo" alt="logo" width="100%" />
      </div>
    </main>
  );
};

export default Home;
