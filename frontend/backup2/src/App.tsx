import UsageChart from "./components/UsageChart";
import CostPrediction from "./components/CostPrediction";
import AlertsPanel from "./components/AlertsPanel";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>📊 Smart Dashboard</h1>
      <UsageChart />
      <CostPrediction />
      <AlertsPanel />
    </div>
  );
}
