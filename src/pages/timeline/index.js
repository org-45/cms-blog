import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Chart from "react-google-charts";

const TimelinePage = () => {
  return (
    <Layout>
      <Helmet title={`0Box`} />
      <div className="h-90vh overscroll-y-auto overflow-auto flex flex-col justify-center items-center">
        <div className="text-4xl p-5 grid justify-center items-center">
          Welcome to the Timeline page.
        </div>

        <div className="bg-gray-200 overscroll-contain overflow-auto h-auto w-full">
          <div className="grid justify-center items-center">
            <Chart
              width={"80vw"}
              height={"80vh"}
              chartType="Gantt"
              loader={<div>Loading Chart...</div>}
              data={[
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
              ]}
              options={{
                title: "Timeline",
                hAxis: { title: "Time" },
                vAxis: { title: "Events" },
                gantt: {
                  trackHeight: 30,
                },
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default TimelinePage;
