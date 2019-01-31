import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import Form from "../components/Form";
import { deletePerson } from "../actions";
import { getPersonById } from "../reducers";
import * as fromForm from "./helpers/form";

export class ModalDeleteC extends Component {
  state = { response: null };
  static propTypes = {};
  handleSubmit = async e => {
    e.preventDefault();
    const { deletePerson, personId } = this.props;
    const response = await deletePerson(personId);
    // Modal will unmount automatically because PerconC will not render
  };
  componentDidMount() {
    fromForm.fill(this.form, this.props.person);
    fromForm.lock(this.form, this.props.person);
  }
  render() {
    const { onModalClose } = this.props;
    return (
      <Modal onClose={onModalClose}>
        <Form
          formRef={el => (this.form = el)}
          onSubmit={this.handleSubmit}
          response={this.state.response}
        />
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  person: getPersonById(state, ownProps.personId)
});

const mapDispatchToProps = {
  deletePerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalDeleteC);
