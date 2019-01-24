import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ModalAdd from "../components/ModalAdd";
import { postPerson } from "../actions";

export class ModalAddC extends Component {
  state = {
    response: null
  };
  static propTypes = {};
  onSubmit = async (data, e) => {
    const { postPerson } = this.props;
    const response = await postPerson(data);
    this.setState({
      response
    });
  };
  render() {
    const { closeModal } = this.props;
    return (
      <ModalAdd
        onSubmit={this.onSubmit}
        close={closeModal}
        response={this.state.response}
      />
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
