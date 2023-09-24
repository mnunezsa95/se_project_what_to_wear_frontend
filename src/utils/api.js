import { checkServerResponse } from "../utils/constants.js";
import { BASE_URL } from "../utils/constants.js";

export function editUserProfile(name, avatar) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(name, avatar),
  }).then(checkServerResponse);
}

export function fetchClothingItems() {
  const getItems = fetch(`${BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return getItems;
}

export function postClothingItems({ name, imageUrl, weatherTypeInput }) {
  const postItems = fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, imageUrl, weather: weatherTypeInput }),
  }).then(checkServerResponse);

  return postItems;
}

export function deleteClothingItems(selectedCard) {
  const deleteItems = fetch(`${BASE_URL}/items/${selectedCard}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkServerResponse);
  return deleteItems;
}
