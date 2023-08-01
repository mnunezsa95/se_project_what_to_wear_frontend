const baseUrl = "https://my-json-server.typicode.com/mnunezsa95/se_project_react";
const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export function fetchClothingItems() {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return getItems;
}

export function postClothingItems({ name, imageUrl, weatherTypeInput }) {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather: weatherTypeInput }),
  }).then(checkServerResponse);

  return postItems;
}

export function deleteClothingItems(selectedCard) {
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return deleteItems;
}
