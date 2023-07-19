export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: require("../../src/images/day_clear.svg").default,
    isDuringDay: true,
    weatherType: "clearSky",
    weatherId: 800,
  },
  {
    url: require("../../src/images/day_cloudy.svg").default,
    isDuringDay: true,
    weatherType: "cloudy",
    weatherId: 801,
  },
  {
    url: require("../../src/images/day_rain.svg").default,
    isDuringDay: true,
    weatherType: "rain",
    weatherId: 501,
  },
  {
    url: require("../../src/images/day_storm.svg").default,
    isDuringDay: true,
    weatherType: "storm",
    weatherId: 201,
  },
  {
    url: require("../../src/images/day_snow.svg").default,
    isDuringDay: true,
    weatherType: "snow",
    weatherId: 601,
  },
  {
    url: require("../../src/images/day_fog.svg").default,
    isDuringDay: true,
    weatherType: "fog",
    weatherId: 741,
  },
  // Night starts below
  {
    url: require("../../src/images/night_clear.svg").default,
    isDuringDay: false,
    weatherType: "clearSky",
    weatherId: 800,
  },
  {
    url: require("../../src/images/night_cloudy.svg").default,
    isDuringDay: false,
    weatherType: "cloudy",
    weatherId: 801,
  },
  {
    url: require("../../src/images/night_rain.svg").default,
    isDuringDay: false,
    weatherType: "rain",
    weatherId: 501,
  },
  {
    url: require("../../src/images/night_storm.svg").default,
    isDuringDay: false,
    weatherType: "storm",
    weatherId: 201,
  },
  {
    url: require("../../src/images/night_snow.svg").default,
    isDuringDay: false,
    weatherType: "snow",
    weatherId: 601,
  },
  {
    url: require("../../src/images/night_fog.svg").default,
    isDuringDay: false,
    weatherType: "fog",
    weatherId: 741,
  },
];
