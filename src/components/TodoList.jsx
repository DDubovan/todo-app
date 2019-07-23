import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <div>
        <ul className="list-group my-5" />
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <Todo
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          onClick={clearList}
          type="button"
          className="btn btn-danger btn-block text-capitalize mt5"
        >
          Reset List
        </button>
      </div>
    );
  }
}
