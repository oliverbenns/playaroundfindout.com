import React from "react";
import logo from "./logo.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

const pointCount = 8;

const data = Array.from(Array(pointCount)).map((_, i) => {
  return {
    pv: i,
  };
});

function App() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis>
          <Label>Play around</Label>
        </XAxis>
        <YAxis tickCount={pointCount} domain={[0, pointCount - 1]}>
          <Label angle={-90}>Find out</Label>
        </YAxis>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default App;
