import React, { Component } from "react";
import DataGridC from "./DataGridC";
import { connect } from "react-redux";
import { getIsFetching } from "../reducers";
import Fetching from "../components/Fetching";

export class ContentC extends Component {
  render() {
    const { isFetching } = this.props;
    return (
      <React.Fragment>
        <DataGridC />
        {isFetching ? <Fetching /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentC);
