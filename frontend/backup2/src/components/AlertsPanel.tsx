export default function AlertsPanel() {
  const alerts = ["📌 Kota %80 doldu", "📌 Yeni paket önerisi var"];

  return (
    <div>
      <h2>⚠️ Uyarılar</h2>
      <ul>
        {alerts.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
