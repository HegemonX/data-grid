import { combineReducers } from "redux";

const isFetching = (state = false, action) => {
  // const actionTypeEnding = action.type.split("_")[2];
  switch (action.type) {
    case "FETCH_GRID_REQUEST":
      return true;
    case "FETCH_GRID_SUCCESS":
    case "FETCH_GRID_ERROR":
      return false;
    default:
      return state;
  }
};

const serverResponse = (state = null, action) => {
  const actionTypeEnding = action.type.split("_")[2];
  switch (actionTypeEnding) {
    case "SUCCESS":
      return { ...action.response };
    case "ERROR":
      return { ...action.error };
    default:
      return state;
  }
};

const ajax = combineReducers({
  serverResponse,
  isFetching
});
export default ajax;

export const getIsFetching = state => state.isFetching;
export const getServerResponse = state => state.serverResponse;
