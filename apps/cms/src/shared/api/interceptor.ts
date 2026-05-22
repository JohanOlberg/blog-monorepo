

import { useAuthStore } from '../../features/auth/store/auth.store';
import { httpClient } from '../api/http-client';


httpClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken; 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});