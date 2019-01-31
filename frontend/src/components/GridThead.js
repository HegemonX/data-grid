import React from "react";
import * as fromShow from "./helpers/show";

function GridThead({ sortList }) {
  return (
    <tr onClick={sortList}>
      {Object.keys(fromShow.fields).map(field => {
        return (
          <th key={field} abbr={field}>
            {fromShow.fields[field]}
          </th>
        );
      })}
      <th abbr={"edit"} style={{ cursor: "unset" }}>
        Edit
      </th>
    </tr>
  );
}

export default GridThead;
