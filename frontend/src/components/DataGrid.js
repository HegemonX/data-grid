import React from "react";
import "./style/DataGrid.scss";
import PersonC from "../containers/PersonC";
import GridTheadC from "../containers/GridTheadC";
import NoDataC from "../containers/NoDataC";
import DataGridOptions from "./DataGridOptions";

function DataGrid({ people, onTableClick }) {
  return (
    <div className="DataGrid">
      <DataGridOptions />
      <table className="DataGrid__table" onClick={onTableClick}>
        <thead>
          <GridTheadC />
        </thead>
        <tbody>
          {people.length > 0 ? (
            people.map(personRaw => (
              <PersonC key={personRaw.id} personRaw={personRaw} />
            ))
          ) : (
            <NoDataC />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;
