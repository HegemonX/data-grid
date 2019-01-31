import React, { Component } from "react";
import ModalDeleteC from "./ModalDeleteC";
import { connect } from "react-redux";

export default class ButtonDeleteC extends Component {
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
          className="ButtonDelete"
          name="delete"
          data-person-id={personId}
          onClick={this.openModal}
        >
          Delete
        </button>
        {this.state.modalShowed ? (
          <ModalDeleteC onModalClose={this.closeModal} personId={personId} />
        ) : null}
      </span>
    );
  }
}
