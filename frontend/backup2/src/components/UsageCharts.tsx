import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

interface Usage {
  date: string;
  value: number;
}

export default function UsageChart() {
  const [data, setData] = useState<Usage[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:8080"}/usage/1`)
      .then(res => res.json())
      .then(setData)
      .catch(() => setData([{ date: "2025-01-01", value: 20 }, { date: "2025-01-02", value: 35 }]));
  }, []);

  return (
    <div>
      <h2>Kullanım Trendleri</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
