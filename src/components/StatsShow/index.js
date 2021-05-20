import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

export default function StatsShow() {
  return (
    <div className="grid grid-cols-5 justify-center items-center bg-gray-900 text-5xl text-white h-30vh">
      <div className="grid justify-center items-center">
        <div>
          <div className="grid text-xl p-5 justify-center items-center">
            {" "}
            <FontAwesomeIcon icon={faCubes} size="3x" />
          </div>

          <CountUp end={403016} redraw={true} suffix={"+"}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <div className="grid text-xl p-5 justify-center items-center">
            {" "}
            Blocks Finalized
          </div>
        </div>
      </div>
      <div className="grid justify-center items-center">
        <div>
          <div className="grid text-xl p-5 justify-center items-center">
            {" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} size="3x" />
          </div>

          <CountUp end={1.704} redraw={true} suffix={"M+"} decimals={4}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <div className="grid text-xl p-5"> No of Transactions</div>
        </div>
      </div>
      <div className="grid justify-center items-center">
        <div>
          <div className="grid text-xl p-5 justify-center items-center">
            {" "}
            <FontAwesomeIcon icon={faStopwatch} size="3x" />
          </div>

          <CountUp end={0.438} redraw={true} decimals={4} suffix={"s"}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <div className="grid text-xl p-5 text-center">Finality</div>
        </div>
      </div>
      <div className="grid justify-center items-center">
        <CountUp end={500} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="grid justify-center items-center">
        <CountUp end={500} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
    </div>
  );
}
