import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { putPerson } from "../actions";
import { getPersonById } from "../reducers";
import Modal from "../components/Modal";
import Form from "../components/Form";
import * as fromForm from "./helpers/form";

export class ModalEditC extends Component {
  state = { response: null };
  handleSubmit = async e => {
    e.preventDefault();
    const data = fromForm.parse(this.form);
    if (!data) {
      this.setState({
        response: "Error parsing data"
      });
      return;
    }
    const { putPerson, onModalClose, personId } = this.props;
    const response = await putPerson(personId, data);
    onModalClose();
  };
  componentDidMount() {
    fromForm.fill(this.form, this.props.person);
  }
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

const mapStateToProps = (state, ownProps) => ({
  person: getPersonById(state, ownProps.personId)
});

const mapDispatchToProps = {
  putPerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditC);
