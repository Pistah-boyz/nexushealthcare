import { get, post } from "./api";
import { BASE_URL, END_POINT } from "../constants";
import "regenerator-runtime/runtime";

export const signOn = async (payload) => {
  const url = `${BASE_URL}/${END_POINT.login}`;

  return await post(url, payload);
};
