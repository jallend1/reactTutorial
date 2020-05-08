import React, { Component } from 'react';
import Turtles from './Turtles';
import AddTurtle from './AddTurtle';

class App extends Component {
  state = {
    turtles : [
        {name: "Leonardo", age: 16, mask: "Blue", id: 1},
        {name: "Donatello", age: 16, mask: "Purple", id: 2},
        {name: "Raphael", age: 16, mask: "Red", id: 3},
        {name: "Michelangelo", age: 16, mask: "Orange", id: 4}
    ]
  }
  addTurtle = turtle => {
    turtle.id = Math.random();
    let turtles = [...this.state.turtles, turtle];
    this.setState({
      turtles: turtles
    })
  }
  deleteTurtle = id => {
    let turtles = this.state.turtles.filter(turtle => id !== turtle.id)
    this.setState({
      turtles: turtles
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First React App!</h1>
        </header>
        <p>Welcome!</p>
        <Turtles deleteTurtle={ this.deleteTurtle } turtles={ this.state.turtles } />
        <AddTurtle addTurtle={ this.addTurtle } />
      </div>
    );
  }
}

export default App;