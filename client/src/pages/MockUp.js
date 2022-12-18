import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import header from "../images/banner.png";
import cclogo from "../images/cc-logo.png";
import clipboard from "../images/clipboard-header.png";
import code from "../images/code.png";
import cookie from "../images/cookie-bow.png";
import jar from "../images/cookie-jar.png";
import dashboard from "../images/dashboard-header.png";
import footer from "../images/footer.png";
import login from "../images/login-header.png";
import logout from "../images/logout-header.png";


import { Editor } from "../components/Editor";

export function MockUp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="App-logo" alt="logo" />
        <img src={clipboard} className="App-logo" alt="logo" />
        <Editor />
        <img src={dashboard} className="App-logo" alt="logo" />
         <img src={cclogo} className="App-logo" alt="logo" />
        <img src={code} className="App-logo" alt="logo" />
        <img src={cookie} className="App-logo" alt="logo" />
        <img src={jar} className="App-logo" alt="logo" />
        <img src={login} className="App-logo" alt="logo" />
        <img src={logout} className="App-logo" alt="logo" />
        <img src={footer} className="App-logo" alt="logo" />
        
       
      </header>
    </div>
  );
}

