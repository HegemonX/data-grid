import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_GRID_SUCCESS":
      return action.response.results.reduce(
        (newState, item) => {
          newState[item.id] = item;
          return newState;
        },
        { ...state }
      );
    case "POST_PERSON_SUCCESS":
      return {
        ...state,
        [action.response.id]: action.response
      };
    default:
      return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GRID_SUCCESS":
      return action.response.results.reduce((newState, item) => {
        newState.push(item.id);
        return newState;
      }, []);
    case "POST_PERSON_SUCCESS":
      return [...state, action.response.id];
    default:
      return state;
  }
};

const sortedList = (state = null, action) => {
  switch (action.type) {
    case "FETCH_GRID_SUCCESS":
    case "POST_PERSON_SUCCESS":
      return null;
    case "SORT_LIST":
      return [...action.response];

    default:
      return state;
  }
};

const checkedList = (state = [], action) => {
  switch (action.type) {
    case "SELECT_PERSON":
      return [...state, action.id];
    case "UNSELECT_PERSON":
      return state.filter(i => i !== action.id);
    default:
      return state;
  }
};

const people = combineReducers({
  byId,
  ids,
  sortedList,
  checkedList
});

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

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_FIELDS_REQUEST":
    case "FETCH_GRID_REQUEST":
      return true;
    case "FETCH_FIELDS_SUCCESS":
    case "FETCH_FIELDS_ERROR":
    case "FETCH_GRID_SUCCESS":
    case "FETCH_GRID_ERROR":
      return false;
    default:
      return state;
  }
};

const serverResponse = (state = null, action) => {
  switch (action.type) {
    case "POST_PERSON_REQUEST":
      return null;
    case "POST_PERSON_SUCCESS":
      return { ...action.response };
    case "POST_PERSON_ERROR":
      return { ...action.error };
    default:
      return state;
  }
};

const fields = combineReducers({
  job,
  status
});

const myApp = combineReducers({
  people,
  fields,
  // filters,
  isFetching,
  serverResponse
});
export default myApp;

export const getPeople = state =>
  state.people.ids.map(id => state.people.byId[id]);
export const getSorted = state => state.people.sortedList;
export const getIsFetching = state => state.isFetching;
export const getFields = state => state.fields;
export const getServerResponse = state => state.serverResponse;
