import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // backend URL’in
  headers: {
    'Content-Type': 'application/json',
    // Token varsa buraya ekle
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const getPlans = () => API.get('/');
export const getRecommendation = (userId) => API.get(`/recommendation/${userId}`);
export const changePlan = (userId, newPlanId) => API.post('/change-plan', { userId, newPlanId });
export const getAddons = () => API.get('/addon');
export const addAddon = (userId, addonId) => API.post('/addon', { userId, addonId });
