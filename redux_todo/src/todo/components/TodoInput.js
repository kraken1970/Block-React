import React from "react";
import { connect } from "react-redux";
import { addTodo, updateValue } from "../actions";

const TodoInput = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} type="text" required />
      <button type="submit">+</button>
    </form>
  );
};

const mapStateToProps = ({ value }, ownProps) => ({ value });
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => {
    const { value } = e.target;
    dispatch(updateValue(value));
  },
  onSubmit: e => {
    e.preventDefault();
    dispatch(addTodo());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
