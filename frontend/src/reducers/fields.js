import { combineReducers } from "redux";

const job = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FIELDS_SUCCESS":
      return [...action.job.results];
    default:
      return state;
  }
};

const status = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FIELDS_SUCCESS":
      return [...action.status.results];
    default:
      return state;
  }
};

const selectFields = combineReducers({
  job,
  status
});
export default selectFields;

export const getAll = state => state;
