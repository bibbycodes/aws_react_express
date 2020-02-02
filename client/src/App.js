import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    }
    this.getFlower();
  }
  getFlower() {
    fetch('/me')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          person: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.person.name}</h1>
        <p>{this.state.person.colour}</p>
      </div>
    );
  }
}

export default App;