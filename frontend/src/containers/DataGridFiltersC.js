import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSelectFields, getPeopleFilters } from "../reducers";
import { getQuery } from "../reducers/filters";
import * as fromActions from "../actions";
import * as fromShow from "../components/helpers/show";
import DataGridFilters from "../components/DataGridFilters";

export class DataGridFiltersC extends Component {
  static propTypes = {};

  invokeDispatcher = e => {
    const selectName = e.target.name;
    let value = e.target.value;
    if (!value) value = null;
    const callbackName = fromShow.filters[selectName];

    if (!this.props[callbackName]) {
      console.log("Unknown dispatcher", callbackName);
      return;
    }
    this.props[callbackName](value);
  };
  onQueryChange = e => {
    const value = e.target.value;
    const { setQuery } = this.props;
    setQuery(value);
  };
  onResetClick = e => {
    e.preventDefault();
    const { resetAll } = this.props;
    resetAll();
  };

  render() {
    const { selectFields, filters } = this.props;
    const filtersJsx = [];
    for (let key in fromShow.filters) {
      if (!(key in selectFields)) continue;
      const filter = (
        <label key={key} className="Filters__filter">
          {`${key[0].toUpperCase() + key.slice(1)}: `}
          <select
            className="Filters__select"
            name={key}
            onChange={this.invokeDispatcher}
            value={filters[key] === null ? "" : filters[key]}
          >
            <option value={""}>---</option>
            {selectFields[key].map(option => (
              <option value={option.id} key={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </label>
      );
      filtersJsx.push(filter);
    }

    return (
      <DataGridFilters
        onQueryChange={this.onQueryChange}
        filters={filtersJsx}
        queryValue={filters.query}
        onResetClick={this.onResetClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectFields: getSelectFields(state),
  filters: getPeopleFilters(state)
});

// Назначать имена функций selectField'ов в соответствии со словарем
// в ./helpers/show filters={}
const mapDispatchToProps = dispatch => ({
  setJob(value) {
    return dispatch(fromActions.setJobFilter(value));
  },
  setStatus(value) {
    return dispatch(fromActions.setStatusFilter(value));
  },
  setQuery(value) {
    return dispatch(fromActions.setQueryFilter(value));
  },
  resetAll() {
    return dispatch(fromActions.resetFilters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataGridFiltersC);
