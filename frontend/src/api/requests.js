import * as req from "./index";

export const grid = () => {
  return req.getRequest("/grid?format=json");
};

export const job = () => {
  return req.getRequest("/job?format=json");
};

export const status = () => {
  return req.getRequest("/status?format=json");
};

export const addPerson = data => {
  return req.postRequest("/grid/", data);
};

export const deletePerson = id => {
  return req.deleteRequest(`/grid/${id}/`);
};

export const putPerson = (id, data) => {
  return req.putRequest(`/grid/${id}/`, data);
};
