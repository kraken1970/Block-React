import { actionTypes } from "./actionTypes";

const {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_VALUE,
  TOGGLE_TODO,
  TOGGLE_FILTER
} = actionTypes;

const initialState = {
  value: "",
  todoList: [],
  filter: "all",
  todoMap: {}
};

const filterState = {
  all: () => true,
  done: todo => todo.done,
  active: todo => !todo.done
};

export const getFilteredTodos = (todos, filter) =>
  todos.filter(filterState[filter]);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = Date.now();

      return {
        ...state,
        todoList: [...state.todoList, { title: state.value, done: false, id }],
        todoMap: {
          ...state.todoMap,
          [id]: state.todoList.length
        },
        value: ""
      };

    case REMOVE_TODO:
      const { [action.payload.toString()]: value, ...todoMap } = state.todoMap;

      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload),
        todoMap
      };

    case UPDATE_VALUE:
      return { ...state, value: action.payload };

    case TOGGLE_FILTER:
      return { ...state, filter: action.payload };

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          }

          return todo;
        })
      };
    default:
      return state;
  }
};
