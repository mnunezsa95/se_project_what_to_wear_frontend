const baseUrl = "http://localhost:3001";
const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export function fetchClothingItems() {
  const getClothingItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return getClothingItems;
}

export function postClothingItems({ name, imageUrl, weatherTypeInput }) {
  const postClothingItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weatherTypeInput }),
  }).then(checkServerResponse);

  return postClothingItems;
}
