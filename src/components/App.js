import React, { Component } from "react";

import database from "./firebase";
import PersonalHeader from "./PersonalHeader";
import ProjectDisplay from "./ProjectDisplay";
import "./App.css";
import logo from "./ns-white.png";

class App extends Component {

  state = {
    info: null,
    projects: null
  };

  componentDidMount() {
    database.ref("info").on("value", (snapshot) => {
      var info = snapshot.val();
      info = {...info, logo: logo};
      this.setState({info});
    });
    database.ref("projects").on("value", (snapshot) => this.setState({projects: snapshot.val()}));
  }

  render() {
    var {info, projects} = this.state;

    return (
      <div className="App">
        <PersonalHeader info = {info}/>
        <ProjectDisplay projects = {projects} color = "orange"/>
      </div>
    );
  }
}

export default App;
