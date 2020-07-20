import React from "react";
import { RiMapPinLine, RiArrowRightSLine } from "react-icons/ri";
import { WiSnow, WiRain } from "react-icons/wi";

function Card() {
  return (
    <div className="h-40 text-white mx-1 my-2" style={{ width: "400px" }}>
      <div
        className="w-full h-full rounded-lg"
        style={{ backgroundImage: `url(${require("../../assets/snow.gif")})` }}
      >
        <div className="flex w-full h-full divide-x divide-gray-400 ">
          <div className="w-9/12">
            <div className="mt-2 ml-2 p-2 rounded-lg bg-gray-800 inline-block text-xs">
              <div className="flex items-center">
                <RiMapPinLine />
                <div className="ml-2">Sarajevo</div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex justify-center w-3/4">
                <div className="flex items-center gap-5">
                  <div className="flex flex-col text-center">
                    <WiSnow className="h-16 w-16" />
                    <div>Snow</div>
                  </div>
                  <div className="flex flex-col text-center">
                    <div className="text-5xl">7°</div>
                    <div className="text-lg">7/19°</div>
                  </div>
                  <div className="self-end text-center">
                    <div className="bg-green-600 rounded-lg text-sm">
                      14 Good
                    </div>
                    <div className="mt-1 text-sm">ES 2.3 km/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <div className="flex justify-between p-2">
              <div className="text-xs">Sat</div>
              <div className="text-xs flex items-center">
                <div>More</div>
                <RiArrowRightSLine />
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="w-full">
                <WiRain className="h-16 w-16 mx-auto" />
              </div>
              <div className="text-lg">11/18°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
