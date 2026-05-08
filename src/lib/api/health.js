import { apiFetch } from './client';
export const getHealth = () => apiFetch('/health');
