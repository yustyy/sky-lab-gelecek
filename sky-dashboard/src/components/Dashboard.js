import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Typography, Button, Select, MenuItem } from '@mui/material';
import { mockPlans, mockRecommendation } from '../mockData';

function Dashboard() {
  const [plans, setPlans] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [recommendation, setRecommendation] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    // Backend yerine dummy data kullan
    setPlans(mockPlans);
    setRecommendation(mockRecommendation);

    setChartData({
      labels: mockPlans.map(plan => plan.name),
      datasets: [
        {
          label: 'Kalan Dakikalar',
          data: mockPlans.map(plan => plan.quotaMinute),
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: true,
        }
      ]
    });
  }, []);

  const handleChangePlan = () => {
    alert(`Seçilen plan: ${selectedPlan}`);
  };

  return (
    <Container>
      <Typography variant="h4">Dashboard (Dummy Data)</Typography>
      <Line data={chartData} />

      <Typography variant="h6" sx={{ mt: 3 }}>Önerilen Plan:</Typography>
      {recommendation && (
        <Typography>{recommendation.name} - {recommendation.quotaMinute} dakika</Typography>
      )}

      <Select
        value={selectedPlan}
        onChange={e => setSelectedPlan(e.target.value)}
        sx={{ mt: 2 }}
      >
        {plans.map(plan => (
          <MenuItem key={plan.id} value={plan.id}>{plan.name}</MenuItem>
        ))}
      </Select>
      <Button variant="contained" sx={{ ml: 2 }} onClick={handleChangePlan}>Planı Değiştir</Button>
    </Container>
  );
}

export default Dashboard;
