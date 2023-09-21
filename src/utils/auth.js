import { checkServerResponse } from "./constants.js";

const baseUrl = "http://localhost:3001";

export const signUp = ({ email, password, name, avatar }) => {
  fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  }).then(checkServerResponse);
};

export const signIn = ({ email, password }) => {
  fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
};
