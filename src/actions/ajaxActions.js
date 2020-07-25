import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
  // Munich, London, California
  const ids = {
    Munich: 2867714,
    London: 2643743,
    California: 4350049,
  };

  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=0c7a18a8180f633ee8c938d39a3b3df7`
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_WEATHER,
    payload: {
      // iterating through object does not guarantee order, so I chose manually
      Munich: fetches[0],
      London: fetches[1],
      California: fetches[2],
    },
  });
};
