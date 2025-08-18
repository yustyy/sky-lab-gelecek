import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sample = [
  { month: "Jan", cost: 50 },
  { month: "Feb", cost: 65 },
  { month: "Mar", cost: 70 },
];

export default function CostPrediction() {
  return (
    <div>
      <h2>💰 Maliyet Tahmini</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sample}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cost" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
