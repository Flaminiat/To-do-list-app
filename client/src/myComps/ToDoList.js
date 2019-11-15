import React, { Component } from "react";
import Item from "./item";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDo = props => (
  <tr>
    <td>{props.activity.name}</td>
    <td>{props.activity.status}</td>
    <td>{props.activity.Created_date.toString().substring(0,10)}</td>
    <td>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteToDo(props.activity._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7003/tasks")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:7003/tasks")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteToDo(id) {
    axios
      .delete("http://localhost:7003/tasks/" + id)
      .then(res => console.log(res.data));
    this.setState({
      todos: this.state.todos.filter(el => el._id !== id)
    });
  }

  todoList() {
    return this.state.todos.map(everyToDo => {
      return (
        <ToDo
          activity={everyToDo}
          deleteToDo={this.deleteToDo}
          key={everyToDo._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Item />
        <div className="container">
          <h3>Logged to do list</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Activity</th>
                <th>Status</th>
                <th>Date</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>{this.todoList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ToDoList;
