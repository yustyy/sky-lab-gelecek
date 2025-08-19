export const mockPlans = [
  {
    id: '1',
    name: 'Basic Plan',
    quotaMinute: 120,
    quotaSms: 50,
    monthlyPrice: 29.99,
    type: 'BASIC',
  },
  {
    id: '2',
    name: 'Standard Plan',
    quotaMinute: 300,
    quotaSms: 200,
    monthlyPrice: 49.99,
    type: 'STANDARD',
  },
  {
    id: '3',
    name: 'Premium Plan',
    quotaMinute: 600,
    quotaSms: 500,
    monthlyPrice: 79.99,
    type: 'PREMIUM',
  }
];

export const mockRecommendation = {
  id: '2',
  name: 'Standard Plan',
  quotaMinute: 300,
  quotaSms: 200,
  monthlyPrice: 49.99,
  type: 'STANDARD',
};

export const mockAddons = [
  { id: 'a1', name: 'Extra 50 Minutes', extraMinute: 50, price: 5 },
  { id: 'a2', name: 'Extra 100 SMS', extraSms: 100, price: 3 },
];
