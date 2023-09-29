// API Link: https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
import { checkServerResponse } from "../utils/constants.js";

const APIkey = "983235a5906c56236bf8fd16494d2b24";
const latitude = 42.3574;
const longitude = -71.0598;

export const getCurrentUserLocation = () => {
  return fetch("https://api.geoapify.com/v1/ipinfo?apiKey=805431c8bb0d47bf91696ba759b399b3")
    .then(checkServerResponse)
    .then((data) => {
      console.log(data);
      const { latitude } = data.location;
      const { longitude } = data.location;
      console.log(latitude, longitude);
      return { latitude, longitude };
    });
};

getCurrentUserLocation();

export const getWeatherForcast = () => {
  const weatherAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`).then(
    checkServerResponse
  );
  return weatherAPI;
};

export function getWeatherData(data) {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round((temperature - 32) * (5 / 9)),
    },
  };
  return weather;
}

export function getWeatherTempRange(temperature, currentTempatureUnit) {
  if (currentTempatureUnit === "F") {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  }
  if (currentTempatureUnit === "C") {
    if (temperature > ((86 - 32) * 5) / 9) {
      return "hot";
    } else if ((temperature >= (66 - 32) * 5) / 9 && temperature <= (85 - 32 * 5) / 9) {
      return "warm";
    } else if (temperature <= ((65 - 32) * 5) / 9) {
      return "cold";
    }
  }
}

export function getWeatherId(data) {
  const weatherIdArray = data.weather.map((item) => {
    return item.id;
  });
  return weatherIdArray.length > 0 ? weatherIdArray[0] : 800;
}

export function getLocationData(data) {
  return data.name;
}
