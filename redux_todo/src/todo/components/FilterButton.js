import React from "react";

export const FilterButton = ({ filter, onClick, currentFilter }) => (
  <button
    className={filter === currentFilter ? "button filter" : "button"}
    onClick={() => onClick(filter)}
  >
    {filter}
  </button>
);
