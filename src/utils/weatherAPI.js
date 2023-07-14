// API Link: https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const APIkey = "983235a5906c56236bf8fd16494d2b24";
const latitude = 42.3574;
const longitude = -71.0598;
console.log(APIkey, latitude, longitude);

export const getWeatherForcast = (APIkey, latitude, longitude) => {
  const weatherAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherAPI;
};
