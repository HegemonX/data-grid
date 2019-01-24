import React from "react";
import "./style/DataGrid.scss";
import PersonC from "../containers/PersonC";
import GridHeadC from "../containers/GridHeadC";
import DataGridOptionsC from "../containers/DataGridOptionsC";

function DataGrid({ people, selectFields }) {
  return (
    <div className="DataGrid">
      <table className="DataGrid__table">
        <thead>
          <GridHeadC selectFields={selectFields} />
        </thead>
        <tbody>
          {people.map(personRaw => (
            <PersonC
              key={personRaw.id}
              personRaw={personRaw}
              selectFields={selectFields}
            />
          ))}
        </tbody>
      </table>
      <DataGridOptionsC />
    </div>
  );
}

export default DataGrid;
