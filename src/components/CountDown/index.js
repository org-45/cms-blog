import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

export default function CountDown() {
  return (
    <div className="flex flex-row justify-center items-center gap-x-10">
      <div className="flex ">
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
      <div className="flex text-xl justify-center items-center">
        {`Left for `} <span className="font-bold m-1">{`ABC`}</span>
        {` release.`}
      </div>
    </div>
  );
}
