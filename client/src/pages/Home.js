import React from "react";
import footer from "../images/GitHub.png";
import Accordion from "../components/Accordion";
import { Donate } from "../components/Donate";


const Home = () => {
  return (
    <main>
      <div>
        <Accordion />
      </div>

      <div>
        <Donate />
      </div>

      <div>
        <img src={footer} className="App-logo" alt="logo" width="100%" />
      </div>
    </main>
  );
};

export default Home;
