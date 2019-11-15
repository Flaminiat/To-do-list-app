import React, { Component } from "react";
import "./App.css";
import ToDoList from "./myComps/ToDoList";


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>My Todo List</h1>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
