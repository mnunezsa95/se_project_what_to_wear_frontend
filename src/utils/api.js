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
  return fetch(`${BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
}

export function postClothingItems({ name, imageUrl, weatherTypeInput }) {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, imageUrl, weather: weatherTypeInput }),
  }).then(checkServerResponse);
}

export function deleteClothingItems(selectedCard) {
  return fetch(`${BASE_URL}/items/${selectedCard}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkServerResponse);
}

export function addCardLike(itemId) {
  return fetch(`${BASE_URL}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkServerResponse);
}

export function removeCardLike(itemId) {
  return fetch(`${BASE_URL}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkServerResponse);
}
