import React from "react";
import { connect } from "react-redux";
import { toggleFilter } from "../actions";
import { FilterButton } from "./FilterButton";

const TodoFilter = ({ toggleFilter, filter }) => (
  <div>
    {["all", "done", "active"].map(key => (
      <FilterButton
        onClick={toggleFilter}
        filter={key}
        currentFilter={filter}
      />
    ))}
  </div>
);

const mapStateToProps = ({ filter }) => ({
  filter
});

export default connect(
  mapStateToProps,
  { toggleFilter }
)(TodoFilter);
