import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPeople, getSorted } from "../reducers";
import { sortList } from "../actions";

export class GridHeadC extends Component {
  static propTypes = {};
  state = {
    descent: true
  };
  sort = property => () => {
    const { people, sorted, sortList } = this.props;
    const descent = this.state.descent;
    console.log("descent", descent);
    const toSort = sorted ? sorted : people;
    const res = toSort.slice().sort((a, b) => {
      if (a[property] > b[property]) return descent ? 1 : -1;
      return descent ? -1 : 1;
    });
    this.setState(prev => ({
      descent: !prev.descent
    }));
    sortList(res);
  };
  render() {
    const { selectFields } = this.props;
    return (
      <tr>
        <th onClick={this.sort("full_name")}>Name</th>
        {Object.keys(selectFields).map(field => (
          <th key={field} onClick={this.sort(field)}>
            {field}
          </th>
        ))}
        <th onClick={this.sort("salary")}>Salary</th>
        <th onClick={this.sort("birth_date")}>Age</th>
        <th onClick={this.sort("joined_job")}>Joined</th>
        <th>Edit</th>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  people: getPeople(state),
  sorted: getSorted(state)
});

const mapDispatchToProps = {
  sortList
  // sortByJob,
  // sortByStatus,
  // sortBySalary,
  // sortByBirthday,
  // sortByJoined
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridHeadC);
