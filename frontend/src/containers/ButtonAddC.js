import React, { Component } from "react";
import ModalAddC from "./ModalAddC";

export default class ButtonAddC extends Component {
  state = {
    modalShowed: false
  };
  open = e => {
    this.setState({
      modalShowed: true
    });
  };
  close = e => {
    this.setState({
      modalShowed: false
    });
  };
  render() {
    return (
      <React.Fragment>
        <button className="DataGrid__action" onClick={this.open}>
          Add
        </button>
        {this.state.modalShowed ? <ModalAddC closeModal={this.close} /> : null}
      </React.Fragment>
    );
  }
}
