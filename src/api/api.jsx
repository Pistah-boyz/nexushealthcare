import axios from "axios";
import "regenerator-runtime/runtime";

export const get = async (url) => {
  return (await axios.get(url)).data;
};

export const post = async (url, payload) => {
  return (await axios.post(url, payload)).data;
};

export const put = async (url, payload) => {
  return (await axios.get(url, payload)).data;
};

export const deleteRequest = async (url, payload) => {
  return (await axios.delete(url, payload)).data;
};

export const patch = async (url, payload) => {
  return (await axios.patch(url, payload)).data;
};
