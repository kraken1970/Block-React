import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div>
      <button onClick={toggleTodo}>v</button>
      <span className={todo.done ? "active" : ""}>{todo.title}</span>
      <button onClick={removeTodo}>x</button>
    </div>
  );
};

const mapStateToProps = ({ todoList, todoMap }, { id }) => {
  return {
    todo: todoList[todoMap[id]]
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    toggleTodo: () => dispatch(toggleTodo(id)),
    removeTodo: () => dispatch(removeTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
