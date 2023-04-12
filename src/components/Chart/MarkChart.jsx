import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Assignment 1",
    A: 60,
    B: 60,
    fullMark: 60
  },
  {
    subject: "Assignment 2",
    A: 60,
    B: 60,
    fullMark: 60
  },
  {
    subject: "Assignment 3",
    A: 60,
    B: 60,
    fullMark: 60
  },
  {
    subject: "Assignment 4",
    A: 60,
    B: 60,
    fullMark: 60
  },
  {
    subject: "Assignment 5",
    A: 60,
    B: 60,
    fullMark: 60
  },
  {
    subject: "Assignment 6",
    A: 60,
    B: 60,
    fullMark: 60
  }
  ,
  {
    subject: "Assignment 7",
    A: 60,
    B: 60,
    fullMark: 60
  }
];
const MarkChart = () => {
  return (
  <div className="my-container mx-auto flex justify-center my-10">
      <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={700}
      height={700}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#f97316"
        fill="#f97316"
        fillOpacity={0.4}
      />
    </RadarChart>
  </div>
  );
};

export default MarkChart;