import api from './api';

export const getPublishedStories = () => api.get('/portfolio/stories/public');
