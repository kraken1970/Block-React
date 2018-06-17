import { actionTypes } from "./actionTypes";

const {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_VALUE,
  TOGGLE_TODO,
  TOGGLE_FILTER
} = actionTypes;

export const addTodo = () => ({
  type: ADD_TODO
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});

export const updateValue = value => ({
  type: UPDATE_VALUE,
  payload: value
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

export const toggleFilter = filter => ({
  type: TOGGLE_FILTER,
  payload: filter
});
