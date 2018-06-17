import { createAction, createReducer } from "redux-act";

export const addTodo = createAction();
export const removeTodo = createAction();
export const updateValue = createAction();
export const toggleTodo = createAction();
export const toggleFilter = createAction();

const initialState = {
  value: "",
  todoList: [],
  filter: "all"
};

export default createReducer(
  {
    [addTodo]: (state, payload) => ({
      ...state,
      todoList: [
        ...state.todoList,
        { title: state.value, done: false, id: Date.now() }
      ]
    }),
    [removeTodo]: (state, payload) => ({
      ...state,
      todoList: state.todoList.filter(todo => todo.id !== payload)
    })
  },
  initialState
);
