import api from './api';

export const loginAdmin = (payload) => api.post('/auth/login', payload);
export const fetchDashboardStats = () => api.get('/revenue/dashboard');
export const fetchLeads = () => api.get('/leads');
export const createClientFromLead = (leadId, payload) => api.post(`/clients/from-lead/${leadId}`, payload);
export const fetchClients = () => api.get('/clients');
export const fetchRevenue = () => api.get('/revenue');
