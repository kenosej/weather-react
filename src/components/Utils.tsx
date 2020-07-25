import React from "react";
import {
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDayRain,
  WiNightRain,
  WiDaySnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog,
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
} from "react-icons/wi";
import { RiDrizzleLine } from "react-icons/ri";

export const determineIcon = (
  idOfWeather: number,
  day: boolean,
  classes?: string
) => {
  const firstDigit = (idOfWeather + "")[0];

  if (idOfWeather === 800) {
    return day ? (
      <WiDaySunny className={classes} />
    ) : (
      <WiNightClear className={classes} />
    );
  }

  switch (firstDigit) {
    case "2":
      return day ? (
        <WiDayThunderstorm className={classes} />
      ) : (
        <WiNightThunderstorm className={classes} />
      );
    case "3":
      return <RiDrizzleLine className={classes} />;
    case "5":
      return day ? (
        <WiDayRain className={classes} />
      ) : (
        <WiNightRain className={classes} />
      );
    case "6":
      return day ? (
        <WiDaySnow className={classes} />
      ) : (
        <WiNightSnow className={classes} />
      );
    case "7":
      return day ? (
        <WiDayFog className={classes} />
      ) : (
        <WiNightFog className={classes} />
      );
    case "8":
      return day ? (
        <WiDayCloudy className={classes} />
      ) : (
        <WiNightCloudy className={classes} />
      );
  }
};

export const determineGif = (idOfWeather: number) => {
  const firstDigit = (idOfWeather + "")[0];

  if (idOfWeather === 800) {
    return ["", require("../assets/clear.gif")];
  }

  switch (firstDigit) {
    case "2":
      return ["", require("../assets/thunderstorm.gif")];
    case "3":
      return ["", require("../assets/drizzle.gif")];
    case "5":
      return ["bg-left-bottom", require("../assets/rain.gif")];
    case "6":
      return ["", require("../assets/snow.gif")];
    case "7":
      return ["", require("../assets/fog.gif")];
    case "8":
      return ["", require("../assets/clouds.gif")];
    default:
      return ["", require("../assets/clear.gif")];
  }
};
