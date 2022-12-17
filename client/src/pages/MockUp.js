import React from "react";
// import { BrowserRouter, Routes, Route, NavLink, Venmo } from "react-router-dom";
import header from "../images/banner.png";
import cclogo from "../images/cc-logo.png";
import clipboard from "../images/clipboard-header.png";
import code from "../images/code.png";
import cookie from "../images/cookie-bow.png";
import jar from "../images/cookie-jar.png";
import dashboard from "../images/dashboard-header.png";
import footer from "../images/footer.png";
import login from "../images/loginImage.png";
import logout from "../images/logout-header.png";

import { Editor } from "../components/Editor";
import { Donate } from "../components/Donate";

export function MockUp() {
  return (
    <div className="App">
      <header className="App-header">
        <samp>
          This text is meant to be treated as sample output from a computer
          program.
        </samp>
        <img src={header} className="App-logo" alt="logo" />
        <img src={clipboard} className="App-logo" alt="logo" />
        <Editor />
        <Donate />
        <img src={dashboard} className="App-logo" alt="logo" />
        <img src={cclogo} className="App-logo" alt="logo" />
        <img src={code} className="icon" alt="logo" />
        <img src={cookie} className="icon" alt="logo" />
        <img src={jar} className="App-logo" alt="logo" />
        <img src={login} className="App-logo" alt="logo" />
        <img src={logout} className="App-logo" alt="logo" />

        <img src={footer} className="App-logo" alt="logo" width="auto" />
        <samp>
          This text is meant to be treated as sample output from a computer
          program.
        </samp>
      </header>
    </div>
  );
}
