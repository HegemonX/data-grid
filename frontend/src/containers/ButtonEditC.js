import React, { Component } from "react";
import ModalEditC from "./ModalEditC";

export default class ButtonEditC extends Component {
  state = { modalShowed: false };
  openModal = e => {
    this.setState({ modalShowed: true });
  };
  closeModal = e => {
    this.setState({ modalShowed: false });
  };

  render() {
    const { personId } = this.props;
    return (
      <span className="ButtonBlock">
        <button
          className="ButtonEdit"
          data-person-id={personId}
          name="edit"
          onClick={this.openModal}
        >
          Edit
        </button>
        {this.state.modalShowed ? (
          <ModalEditC onModalClose={this.closeModal} personId={personId} />
        ) : null}
      </span>
    );
  }
}
