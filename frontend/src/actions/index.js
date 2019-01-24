import * as req from "../api/requests";

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
      response
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
    dispatch({
      type: "POST_PERSON_REQUEST",
      data
    });
    const response = await req.addPerson(data);
    dispatch({
      type: "POST_PERSON_SUCCESS",
      response
    });
    return response;
  } catch (error) {
    dispatch({
      type: "POST_PERSON_ERROR",
      error
    });
  }
};

export const sortList = newList => ({
  type: "SORT_LIST",
  response: newList
});
