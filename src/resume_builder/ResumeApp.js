import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

import "./ResumeApp.css";

function ResumeApp() {
  return (
    <div className="App">
      <div className="nav-buttons">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/todo" className="nav-button">Todo List</Link>
        <Link to="/noteapp" className="nav-button">Notes</Link>
      </div>
      <Header />
      <Body />
    </div>
  );
}

export default ResumeApp;
