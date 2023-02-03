import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
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
      <LineChart margin={{ left: -40 }} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis tickFormatter={() => ""}>
          <Label>Play around</Label>
        </XAxis>
        <YAxis
          tickFormatter={() => ""}
          tickCount={pointCount}
          domain={[0, pointCount - 1]}
        >
          <Label angle={-90}>Find out</Label>
        </YAxis>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default App;
