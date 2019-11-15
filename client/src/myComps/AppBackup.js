import React, { Component } from "react";
import "./App.css";
import ToDoList from "./myComps/ToDoList";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    console.log("Hi, I am here..");
  };
  render() {
    return (
      <div>
        <div className="App">
          <h1>My Todo List</h1>
          <ToDoList
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            id={this.state.todos.id}
          />
        </div>
      </div>
    );
  }
}

export default App;
