import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPeopleToshow } from "../reducers";
import { fetchData, openModal } from "../actions";
// import ModalC from "./ModalC";
import DataGrid from "../components/DataGrid";

export class DataGridC extends Component {
  static propTypes = { people: PropTypes.array };

  componentDidMount() {
    console.log("rerender?");
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { people } = this.props;
    return (
      <React.Fragment>
        <DataGrid people={people} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  people: getPeopleToshow(state)
});

const mapDispatchToProps = {
  fetchData,
  openModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataGridC);
