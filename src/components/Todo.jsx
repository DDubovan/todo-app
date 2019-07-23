import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div onClick={handleEdit} className="todo-icon">
          <div>
            <img src="./assets/edit-icon.svg" className="edit-icon" alt="" />
          </div>
          <div onClick={handleDelete} className="text-danger">
            <button className="btn btn-danger btn-sm">X</button>
          </div>
        </div>
      </li>
    );
  }
}
