import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => (dispatch) => {
  console.log("okay");
};

// Sarajevo: 3191281
// Munich: 2867714
// London: 2643743
// California: 4350049

/**
 fetch()
  "https://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=0c7a18a8180f633ee8c938d39a3b3df7"
    .then((res) => res.json())
    .then((weather) => {
      console.log(weather);

      dispatch({
        type: FETCH_WEATHER,
        payload: weather,
      });
    });
 */
