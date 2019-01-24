import axios from "axios";

export const PROXY_URL = `http://127.0.0.1:8080/`;
export const SERVER_URL = `http://127.0.0.1:8000/`;

const proxyRequest = axios.create({
  baseURL: PROXY_URL + SERVER_URL,
  timeout: 3000
});
const handleOK = response => {
  const prefix = (response.status + "")[0];
  if (prefix === "2") {
    return response.data;
  } else {
    throw new Error(`Error code: ${response.status}`);
  }
};
export const getRequest = async url => {
  const response = await proxyRequest(url);
  return handleOK(response);
};
export const postRequest = async (url, data) => {
  console.log(data);
  const response = await proxyRequest.post(url, { ...data });
  return handleOK(response);
};
export const putRequest = async (url, data) => {
  const response = await proxyRequest.put(url, { data });
  return handleOK(response);
};
export const deleteRequest = async url => {
  const response = await proxyRequest.delete(url);
  return handleOK(response);
};
