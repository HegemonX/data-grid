import { combineReducers } from "redux";

const all = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GRID_SUCCESS":
      return [...action.response.result];
    case "POST_PERSON_SUCCESS":
      return [...state, action.response.result];
    case "DELETE_PERSON_SUCCESS":
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

const selected = (state = [], action) => {
  switch (action.type) {
    case "SELECT_PERSON":
      return [...state, action.id];
    case "UNSELECT_PERSON":
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

const ids = combineReducers({
  all,
  selected
});
export default ids;

export const getSelected = state => state.selected;
export const getAll = state => state.all;
