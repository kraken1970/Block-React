import React from "react";
import { connect } from "react-redux";
import { getFilteredTodos } from "../reducer";
import TodoItem from "./TodoItem";

const TodoList = ({ todoIds }) => {
  return todoIds.map(id => <TodoItem id={id} key={id} />);
};

export default connect(({ todoList, filter }) => ({
  todoIds: getFilteredTodos(todoList, filter).map(todo => todo.id)
}))(TodoList);
