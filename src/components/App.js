import React, { Component } from "react";

import PersonalHeader from "./PersonalHeader";
import ProjectDisplay from "./ProjectDisplay";
import "./App.css";
import logo from "./ns-white.png";
import data from "./data.json";

class App extends Component {

  render() {
    var {info, projects} = data;
    info = {...info, logo: logo};

    return (
      <div className="App">
        <PersonalHeader info = {info}/>
        <ProjectDisplay projects = {projects}/>
      </div>
    );
  }
}

export default App;
