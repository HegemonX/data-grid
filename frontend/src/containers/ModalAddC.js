import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import Form from "../components/Form";
import { postPerson } from "../actions";
import * as fromForm from "./helpers/form";

export class ModalAddC extends Component {
  state = {
    response: null
  };
  static propTypes = {};
  onSubmit = async e => {
    e.preventDefault();
    const data = fromForm.parse(this.form);
    if (!data) {
      this.setState({
        response: "Error parsing data"
      });
      return;
    }
    const { postPerson, onModalClose } = this.props;
    const response = await postPerson(data);
    onModalClose();
  };
  render() {
    const { onModalClose } = this.props;
    return (
      <Modal onClose={onModalClose}>
        <Form
          formRef={el => (this.form = el)}
          onSubmit={this.onSubmit}
          response={this.state.response}
        />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  postPerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddC);
