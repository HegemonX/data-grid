import * as req from "../api/requests";
import * as fromProcess from "./helpers/process";
import { normalize } from "normalizr";
import * as schema from "./helpers/schema";

export const fetchData = () => async dispatch => {
  await dispatch(fetchFields());
  await dispatch(fetchGrid());
};

export const fetchGrid = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "FETCH_GRID_REQUEST"
    });
    const response = await req.grid();
    dispatch({
      type: "FETCH_GRID_SUCCESS",
      response: fromProcess.processPeopleToState(response)
    });
  } catch (error) {
    dispatch({
      type: "FETCH_GRID_ERROR",
      error
    });
  }
};
export const fetchFields = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "FETCH_FIELDS_REQUEST"
    });
    const response = await Promise.all([req.job(), req.status()]);
    dispatch({
      type: "FETCH_FIELDS_SUCCESS",
      job: response[0],
      status: response[1]
    });
  } catch (error) {
    dispatch({
      type: "FETCH_FIELDS_ERROR",
      error
    });
  }
};

export const postPerson = data => async dispatch => {
  try {
    const parsedData = fromProcess.processPersonToServer(data);
    dispatch({
      type: "POST_PERSON_REQUEST",
      data,
      parsedData
    });
    const rawResponse = await req.addPerson(parsedData);
    const response = fromProcess.processPersonToState(rawResponse);
    dispatch({
      type: "POST_PERSON_SUCCESS",
      response,
      rawResponse
    });
    return response;
  } catch (error) {
    dispatch({
      type: "POST_PERSON_ERROR",
      error,
      data
    });
    return error;
  }
};

export const deletePerson = id => async dispatch => {
  try {
    dispatch({
      type: "DELETE_PERSON_REQUEST",
      id
    });
    const response = await req.deletePerson(id);
    dispatch({
      type: "DELETE_PERSON_SUCCESS",
      id
    });
    return response;
  } catch (error) {
    dispatch({
      type: "DELETE_PERSON_ERROR",
      error,
      id
    });
  }
};

export const putPerson = (id, data) => async dispatch => {
  try {
    const parsedData = fromProcess.processPersonToServer(data);
    dispatch({
      type: "PUT_PERSON_REQUEST",
      id,
      parsedData,
      data
    });
    const rawResponse = await req.putPerson(id, parsedData);
    const response = fromProcess.processPersonToState(rawResponse);
    dispatch({
      type: "PUT_PERSON_SUCCESS",
      response,
      id
    });
    return response;
  } catch (error) {
    dispatch({
      type: "DELETE_PERSON_ERROR",
      id,
      data,
      error
    });
  }
};

export const sortList = sortBy => ({
  type: "SORT_GRID",
  sortBy
});

export const resetFilters = () => ({
  type: "RESET_ALL_FILTERS"
});

export const setJobFilter = value => ({
  type: "SET_JOB_FILTER",
  value
});
export const setStatusFilter = value => ({
  type: "SET_STATUS_FILTER",
  value
});
export const setQueryFilter = value => ({
  type: "SET_QUERY_FILTER",
  value
});

export const openModal = (personId, type) => ({
  type: "OPEN_MODAL",
  personId,
  type
});
export const closeModal = () => ({
  type: "CLOSE_MODAL"
});
