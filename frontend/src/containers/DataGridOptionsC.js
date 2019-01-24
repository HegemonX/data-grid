import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ButtonAddC from "./ButtonAddC";

export class DataGridOptionsC extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="DataGrid__options">
        <ButtonAddC />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataGridOptionsC);
