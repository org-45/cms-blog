import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

export default function CountDown() {
  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <div className="grid">
        <FlipCountdown
          endAt={"2022-12-12 01:26:58"} // Date/Time
          size="small"
          theme="light"
          titlePosition="bottom"
          hideYear
          hideMonth
          dayTitle="DD"
          hourTitle="HH"
          minuteTitle="MM"
          secondTitle="SS"
        />
      </div>
      <div className="flex flex-row justify-center items-center">
        {`Left for `} <span className="font-bold m-1">{`ABC`}</span>
        {` release.`}
      </div>
    </div>
  );
}
