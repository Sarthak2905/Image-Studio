import api from './api';

export const submitInquiry = (payload) => api.post('/leads/public-inquiry', payload);
