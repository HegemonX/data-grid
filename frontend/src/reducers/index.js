import { combineReducers } from "redux";
import people, * as fromPeople from "./people";
import selectFields, * as fromSelectFields from "./fields";
import ajax, * as fromAjax from "./ajax";
import modal, * as fromModal from "./modal";

const myApp = combineReducers({
  people,
  selectFields,
  ajax
});
export default myApp;

// export const getIsModalOpen = state => fromModal.getIsOpen(state.modal);
// export const getModalInfo = state => fromModal.getInfo(state.modal);

export const getPeopleToshow = state => fromPeople.getToShow(state.people);
export const getPersonById = (state, id) =>
  fromPeople.getById(state.people, id);

export const getTableFilters = state => fromPeople.getFilters(state.people);

export const getSelectFields = state =>
  fromSelectFields.getAll(state.selectFields);

export const getPeopleFilters = state => fromPeople.getFilters(state.people);

export const getIsFetching = state => fromAjax.getIsFetching(state.ajax);
