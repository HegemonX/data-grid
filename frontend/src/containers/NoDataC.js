import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetFilters } from "../actions";

export class NoDataC extends Component {
  render() {
    const { resetFilters } = this.props;
    return (
      <tr>
        <td colSpan="100">
          <div className="DataGrid__no-content">
            No content. {` `}
            <button className="DataGrid__action" onClick={resetFilters}>
              Reset filters
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  resetFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoDataC);
