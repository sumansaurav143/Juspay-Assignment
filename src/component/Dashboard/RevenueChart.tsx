import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import '../../App.css'; // Import custom styles

const data = [
  { month: "Jan", current: 12000, previous: 10000 },
  { month: "Feb", current: 14000, previous: 13000 },
  { month: "Mar", current: 18000, previous: 15000 },
  { month: "Apr", current: 16000, previous: 17000 },
];

export default function RevenueChart() {
  return (
    <div className="revenue-chart-container">
      <h2>Revenue</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="current" stroke="#4F46E5" strokeWidth={2} />
          <Line type="monotone" dataKey="previous" stroke="#9CA3AF" strokeWidth={2} strokeDasharray="4 4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
