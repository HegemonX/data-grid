import React from "react";
import "./style/Filters.scss";

function DataGridFilters({ onQueryChange, filters, queryValue, onResetClick }) {
  return (
    <div className="DataGrid__filters">
      <form className="Filters__form">
        <input
          type="text"
          value={queryValue}
          onChange={onQueryChange}
          className="Filters__search"
          placeholder="Find person..."
        />
        {filters.length > 0 ? filters : null}
        <button onClick={onResetClick}>Reset filters</button>
      </form>
    </div>
  );
}

export default DataGridFilters;
