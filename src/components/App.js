import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Nathanael See"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          Work in progress - check back later!
        </p>
      </div>
    );
  }
}

export default App;
