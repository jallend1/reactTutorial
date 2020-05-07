import React, { Component } from 'react';
import Turtles from './Turtles';

class App extends Component {
  state = {
    turtles : [
        {name: "Leonardo", age: 16, mask: "Blue", id: 1},
        {name: "Donatello", age: 16, mask: "Purple", id: 2},
        {name: "Raphael", age: 16, mask: "Red", id: 3},
        {name: "Michelangelo", age: 16, mask: "Orange", id: 4}
    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First React App!</h1>
        </header>
        <p>Welcome!</p>
        <Turtles turtles = { this.state.turtles }/>
      </div>
    );
  }
}

export default App;
