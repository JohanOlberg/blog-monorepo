import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {type AuthenticatedUser } from '../model/auth.types';

interface AuthState {
  user: AuthenticatedUser | null;
  accessToken: string | null;
  setAuth: (user: AuthenticatedUser, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,

      setAuth: (user, accessToken) => set({ 
        user, 
        accessToken, 
      }),

      logout: () => set({ 
        user: null, 
        accessToken: null, 
      }),
    }),
    {
      name: 'auth-storage', // Chave que será usada no localStorage
    }
  )
);