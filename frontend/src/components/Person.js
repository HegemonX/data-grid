import React from "react";
import ButtonDeleteC from "../containers/ButtonDeleteC";
import ButtonEditC from "../containers/ButtonEditC";
import * as fromShow from "./helpers/show";

function Person({ fields, id }) {
  return (
    <tr>
      {Object.keys(fromShow.fields).map(field => {
        return <td key={field}>{fields[field]}</td>;
      })}
      <td>
        <ButtonDeleteC personId={id} />
        <ButtonEditC personId={id} />
      </td>
    </tr>
  );
}

export default Person;
