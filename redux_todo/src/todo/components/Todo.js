import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

export default () => {
  return (
    <div>
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  );
};
