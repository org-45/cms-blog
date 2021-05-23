import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Chart from "react-google-charts";

import "./index.css";

const TimelinePageTemplate = (props) => {
  const { title, meta_title, meta_description, timeline } = props;

  console.log(timeline, "our timeline data");

  //normalization of timeline data

  const timelineData2 = [
    [
      { type: "string", label: "Task ID" },
      { type: "string", label: "Task Name" },
      { type: "string", label: "Resource" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Duration" },
      { type: "number", label: "Percent Complete" },
      { type: "string", label: "Dependencies" },
    ],
  ];

  const timelineMapped = timeline.map((data, index) => {
    return [
      data.task_id,
      data.task_name,
      data.resource,
      new Date(data.start_date),
      new Date(data.end_date),
      null,
      data.percentage_complete,
      null,
    ];
  });

  timelineData2.push(...timelineMapped);

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      {/* BANNER */}
      <div className="bg-gray-900 h-40vh grid grid-cols-1 text-white justify-center items-center">
        <h1 className=" grid pt-20 text-6xl font-black  text-white justify-center items-center">
          {title}
        </h1>
        <p className=" grid text-xl justify-center items-center">
          {meta_description}
        </p>
      </div>

      {/* Gantt */}
      <div className=" overscroll-y-auto overflow-auto overscroll-contain grid justify-center items-center p-20 ">
        <Chart
          width={"80vw"}
          height={"80vh"}
          chartType="Gantt"
          loader={<div>Loading Chart...</div>}
          data={timelineData2}
          options={{
            title: "Timeline",
            hAxis: { title: "Time" },
            vAxis: { title: "Events" },
            gantt: {
              trackHeight: 30,
              labelStyle: {
                fontSize: 13,
                margin: 30,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
TimelinePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      task_id: PropTypes.string,
      task_name: PropTypes.string,
      resource: PropTypes.string,
      start_date: PropTypes.string,
      end_date: PropTypes.string,
      duration: PropTypes.number,
      percentage_complete: PropTypes.number,
      dependencies: PropTypes.string,
    })
  ),
};

export default TimelinePageTemplate;

const timelineData = [
  [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ],
  [
    "2014Spring",
    "Spring 2014",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 5, 20),
    null,
    100,
    null,
  ],
  [
    "2014Summer",
    "Summer 2014",
    "summer",
    new Date(2014, 5, 21),
    new Date(2014, 8, 20),
    null,
    100,
    null,
  ],
  [
    "2014Autumn",
    "Autumn 2014",
    "autumn",
    new Date(2014, 8, 21),
    new Date(2014, 11, 20),
    null,
    100,
    null,
  ],
  [
    "2014Winter",
    "Winter 2014",
    "winter",
    new Date(2014, 11, 21),
    new Date(2015, 2, 21),
    null,
    100,
    null,
  ],
  [
    "2015Spring",
    "Spring 2015",
    "spring",
    new Date(2015, 2, 22),
    new Date(2015, 5, 20),
    null,
    50,
    "2014Autumn",
  ],
  [
    "2015Summer",
    "Summer 2015",
    "summer",
    new Date(2015, 5, 21),
    new Date(2015, 8, 20),
    null,
    0,
    "2014Autumn",
  ],
  [
    "2015Autumn",
    "Autumn 2015",
    "autumn",
    new Date(2015, 8, 21),
    new Date(2015, 11, 20),
    null,
    0,
    null,
  ],
  [
    "2015Winter",
    "Winter 2015",
    "winter",
    new Date(2015, 11, 21),
    new Date(2016, 2, 21),
    null,
    0,
    null,
  ],
  [
    "Football",
    "Football Season",
    "sports",
    new Date(2014, 8, 4),
    new Date(2015, 1, 1),
    null,
    100,
    null,
  ],
  [
    "Baseball",
    "Baseball Season",
    "sports",
    new Date(2015, 2, 31),
    new Date(2015, 9, 20),
    null,
    14,
    null,
  ],
  [
    "Basketball",
    "Basketball Season",
    "sports",
    new Date(2014, 9, 28),
    new Date(2015, 5, 20),
    null,
    86,
    null,
  ],
  [
    "Hockey",
    "Hockey Season",
    "sports",
    new Date(2014, 9, 8),
    new Date(2015, 5, 21),
    null,
    89,
    null,
  ],
  [
    "Hockey2",
    "Hockey Season2",
    "sports",
    new Date(2015, 9, 8),
    new Date(2015, 11, 21),
    null,
    89,
    null,
  ],
  [
    "Hockey3",
    "Hockey Season 3",
    "sports",
    new Date(2015, 12, 8),
    new Date(2015, 12, 21),
    null,
    89,
    null,
  ],
  [
    "Hockey6",
    "Hockey Season 6",
    "sports",
    new Date(2016, 1, 8),
    new Date(2016, 2, 21),
    null,
    89,
    null,
  ],
  [
    "Hocke5",
    "Hocke Season ",
    "sports",
    new Date(2016, 2, 2),
    new Date(2016, 4, 21),
    null,
    20,
    null,
  ],
  [
    "Hockey 4",
    "Hockey Season 4",
    "sports",
    new Date(2014, 3, 8),
    new Date(2015, 6, 21),
    null,
    8,
    null,
  ],
  [
    "Hockey 5",
    "Hockey Season 5",
    "sports",
    new Date(2016, 3, 8),
    new Date(2016, 6, 21),
    null,
    8,
    null,
  ],
  [
    "Hockey 7",
    "Hockey Season 7",
    "sports",
    new Date(2017, 3, 8),
    new Date(2017, 6, 21),
    null,
    8,
    null,
  ],
];
