import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: null,
  refreshToken: null,
  setToken: (token) => set({ token }),
  setRefreshToken: (refreshToken) => set({ refreshToken }),
  clearAuth: () => set({ token: null, refreshToken: null }),
}));
