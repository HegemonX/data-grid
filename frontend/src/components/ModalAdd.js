import React from "react";
import "./style/Modal.scss";

function ModalAdd({ onClose, onSubmit, response, close }) {
  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      job: e.target.elements.job.value,
      status: e.target.elements.status.value,
      full_name: e.target.elements.fullName.value
    };
    await onSubmit(data);
    close();
  };
  return (
    <div className="Modal">
      <div className="Modal__message">
        <div className="Modal__close" onClick={close} />
        <form className="Modal__form" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
}

export default ModalAdd;
