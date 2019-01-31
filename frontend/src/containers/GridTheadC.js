import React, { Component } from "react";
import { connect } from "react-redux";
import { sortList } from "../actions";
import GridThead from "../components/GridThead";

export class GridTHeadC extends Component {
  sortList = e => {
    const thName = e.target.abbr;
    if (!thName || thName === "edit") return;
    const { sortList } = this.props;
    sortList(thName);
  };
  render() {
    return <GridThead sortList={this.sortList} />;
  }
}

export default connect(
  null,
  { sortList }
)(GridTHeadC);
