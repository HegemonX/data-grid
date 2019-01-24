import React, { Component } from "react";
import PropTypes from "prop-types";
import DataGrid from "../components/DataGrid";
import Fetching from "../components/Fetching";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import { getPeople, getIsFetching, getFields, getSorted } from "../reducers";

export class ContentC extends Component {
  static propTypes = {
    people: PropTypes.array,
    fields: PropTypes.object
  };
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { isFetching, people, fields, sorted } = this.props;
    const toRender = sorted ? sorted : people;
    return isFetching || !toRender.length ? (
      <Fetching />
    ) : (
      <DataGrid people={toRender} selectFields={fields} />
    );
  }
}

const mapStateToProps = state => ({
  people: getPeople(state),
  sorted: getSorted(state),
  fields: getFields(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  fetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentC);
