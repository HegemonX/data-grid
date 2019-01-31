import React from "react";
import "./style/Modal.scss";

function Form({ onSubmit, formRef, response }) {
  return (
    <form className="ModalForm" onSubmit={onSubmit} ref={formRef}>
      <div>
        <label>
          Full name:
          <input type="text" name="fullName" />
        </label>
      </div>
      <div>
        <label>
          Job:
          <select name="job">
            <option value="1">Programmer</option>
            <option value="2">Manager</option>
            <option value="3">Operator</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Job:
          <select name="status">
            <option value="1">Active</option>
            <option value="2">Fired</option>
            <option value="3">Trainee</option>
          </select>
        </label>
      </div>
      <input type="submit" name="submit" value="Sumbit" />
    </form>
  );
}

export default Form;
