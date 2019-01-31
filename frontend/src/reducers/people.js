import { combineReducers } from "redux";
import ids, * as fromIds from "./ids";
import filters, * as fromFilters from "./filters";
import * as fromSort from "./helpers/sort";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_GRID_SUCCESS":
    case "POST_PERSON_SUCCESS":
    case "PUT_PERSON_SUCCESS":
      return {
        ...state,
        ...action.response.entities.people
      };
    // case "DELETE_PERSON_SUCCESS":
    //   const newState = {
    //     ...state
    //   };
    //   delete newState[action.id];
    //   return newState;
    default:
      return state;
  }
};

const order = (state = "fullName", action) => {
  switch (action.type) {
    case "SORT_GRID":
      return state === action.sortBy
        ? state[0] === "-"
          ? state.slice(1)
          : "-" + state
        : action.sortBy;
    default:
      return state;
  }
};

const people = combineReducers({
  byId,
  ids,
  filters,
  order
});
export default people;

export const getIsFetching = state => state.isFetching;

export const getToShow = state => {
  const idsToShow = getIdsToShow(state);
  // console.log(idsToShow);
  return getByIds(state, idsToShow);
};
const getIdsToShow = state => {
  const filteredIds = getFilteredIds(state);
  // console.log(filteredIds);
  return fromSort.sortIds(state, filteredIds);
};

const getPeople = state => getByIds(state, getAllIds(state));

const getAllIds = state => fromIds.getAll(state.ids);

export const getSelected = state => getByIds(state, getSelectedIds(state));

const getSelectedIds = state => fromIds.getSelected(state.ids);

export const getById = (state, id) => state.byId[id];

export const getByIds = (state, ids) => ids.map(id => getById(state, id));
export const getFilters = state => fromFilters.getAll(state.filters);
export const getOrder = state => state.order;

const getFilteredIds = state => {
  const allIds = getAllIds(state);
  const { query, ...filters } = getFilters(state);

  return allIds.filter(id => {
    const elem = getById(state, id);
    const nameLwrd = elem.fullName.toLowerCase();
    const queryLwrd = query.toLowerCase();
    if (nameLwrd.indexOf(queryLwrd) === -1) return false;
    for (let f in filters) {
      if (filters[f] === null) continue;
      if (+filters[f] !== +elem[f]) return false;
    }
    return true;
  });
};
