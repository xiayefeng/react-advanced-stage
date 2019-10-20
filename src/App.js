import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
// import logo from './logo.svg';
import "./App.css";

@observer
class App extends Component {
  @observable value = "a";
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        App
        <input
          value={this.value}
          onChange={e => (this.value = e.target.value)}
        />
        {this.value}
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
