import React from "react";
import DataGridFiltersC from "../containers/DataGridFiltersC";
import ButtonAddC from "../containers/ButtonAddC";

function DataGridOptions() {
  return (
    <div className="DataGrid__options">
      <DataGridFiltersC />
      <ButtonAddC />
    </div>
  );
}

export default DataGridOptions;
