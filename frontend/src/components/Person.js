import React from "react";

function Person({ name, joinedJob, salary, age, ...selectedFields }) {
  return (
    <tr>
      <td>{name}</td>
      {Object.keys(selectedFields).map(field => (
        <td key={field}>{selectedFields[field]}</td>
      ))}
      <td>{salary}</td>
      <td>{age}</td>
      <td>{joinedJob}</td>
      <td>
        <button className="DataGrid__action">Delete</button>
        <button className="DataGrid__action">Edit</button>
      </td>
    </tr>
  );
}

export default Person;
