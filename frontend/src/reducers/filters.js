import { combineReducers } from "redux";

const query = (state = "", action) => {
  switch (action.type) {
    case "SET_QUERY_FILTER":
      return action.value;
    case "RESET_QUERY_FILTER":
    case "RESET_ALL_FILTERS":
      return "";
    default:
      return state;
  }
};
const job = (state = null, action) => {
  switch (action.type) {
    case "SET_JOB_FILTER":
      return action.value;
    case "RESET_JOB_FILTER":
    case "RESET_ALL_FILTERS":
      return null;
    default:
      return state;
  }
};
const status = (state = null, action) => {
  switch (action.type) {
    case "SET_STATUS_FILTER":
      return action.value;
    case "RESET_STATUS_FILTER":
    case "RESET_ALL_FILTERS":
      return null;
    default:
      return state;
  }
};

const filters = combineReducers({
  query,
  job,
  status
});
export default filters;

export const getStatus = state => state.status;
export const getJob = state => state.job;
export const getQuery = state => state.query;
export const getAll = state => state;
