import React, { Component } from "react";
import Person from "../components/Person";
import { connect } from "react-redux";
import { getSelectFields } from "../reducers";
import { parseFromState } from "./helpers/person";

export class PersonC extends React.PureComponent {
  render() {
    const { personRaw, selectFields } = this.props;
    // console.log(selectFields);
    const info = parseFromState(personRaw, selectFields);
    return <Person fields={info} id={personRaw.id} />;
  }
}

const mapStateToProps = state => ({
  selectFields: getSelectFields(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonC);
