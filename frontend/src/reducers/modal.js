import { combineReducers } from "redux";

const personId = (state = null, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return action.personId;
    default:
      return state;
  }
};
const type = (state = null, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return action.type;
    case "CLOSE_MODAL":
      return null;
    default:
      return state;
  }
};

const modal = combineReducers({
  personId,
  type
});
export default modal;

export const getInfo = state => state;
export const getIsOpen = state => (state.type ? true : false);
