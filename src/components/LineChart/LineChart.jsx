import { LineChart as LineCh, Line } from "recharts";

const LineChart = () => {
  const mathScores = [
    { id: 1, week: "Week 1", score: 62 },
    { id: 2, week: "Week 2", score: 68 },
    { id: 3, week: "Week 3", score: 74 },
    { id: 4, week: "Week 4", score: 70 },
    { id: 5, week: "Week 5", score: 78 },
    { id: 6, week: "Week 6", score: 81 },
    { id: 7, week: "Week 7", score: 85 },
    { id: 8, week: "Week 8", score: 88 },
    { id: 9, week: "Week 9", score: 90 },
    { id: 10, week: "Week 10", score: 87 },
    { id: 11, week: "Week 11", score: 92 },
    { id: 12, week: "Week 12", score: 95 },
  ];

  return (
    <div className="bg-yellow-50">
      <LineCh width={600} height={300} data={mathScores}>
        <Line type="monotone" dataKey="score" stroke="red"></Line>
      </LineCh>
    </div>
  );
};

export default LineChart;
