import { checkServerResponse } from "../utils/constants.js";
const baseUrl = "https://my-json-server.typicode.com/mnunezsa95/se_project_react";

export function fetchClothingItems() {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return getItems;
}

export function postClothingItems({ name, imageUrl, weatherTypeInput }, token) {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather: weatherTypeInput }),
  }).then(checkServerResponse);

  return postItems;
}

export function deleteClothingItems(selectedCard, token) {
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
  return deleteItems;
}
