import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      Created_date: new Date(),
      status: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDate(date) {
    this.setState({
      Created_date: date
    });
  }
  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const todo = {
      name: this.state.name,
      Created_date: this.state.Created_date,
      status: this.state.status
    };
    console.log(todo);
    axios
      .post("http://localhost:7003/tasks", todo)
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <div className="container">
        <form className="mb-5 p-4" onSubmit={this.onSubmit}>
          <div className="form-row pl-4">
            <div className="col-3 mr-4 ml-1">
              <input
                placeholder="New to do item"
                type="text"
                className="form-control mr-4"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <div className="col-3">
              <div className="input-group-prepend"></div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={this.state.status}
                onChange={this.onChangeStatus}
              >
                <option defaultValue>Choose status</option>
                <option value="pending">pending</option>
                <option value="ongoing">ongoing</option>
                <option value="completed">completed</option>
              </select>
            </div>
            <div className="col-5">
              <label className="mr-2">Date</label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                className="form-control"
                selected={this.state.Created_date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <input
            type="submit"
            value="Create new to do item"
            className="btn btn-info mt-5 text-center"
          />
        </form>
      </div>
    );
  }
}

export default Item;
