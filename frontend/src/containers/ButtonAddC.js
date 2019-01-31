import React, { Component } from "react";
import ModalAddC from "./ModalAddC";

export default class ButtonAddC extends Component {
  state = { modalShowed: false };
  openModal = e => {
    this.setState({ modalShowed: true });
  };
  closeModal = e => {
    this.setState({ modalShowed: false });
  };
  render() {
    return (
      <div className="ButtonBlock">
        <button className="ButtonAdd" onClick={this.openModal}>
          Add
        </button>
        {this.state.modalShowed ? (
          <ModalAddC onModalClose={this.closeModal} />
        ) : null}
      </div>
    );
  }
}
