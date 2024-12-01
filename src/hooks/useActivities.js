import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { fetchActivities } from '../utils/stravaApi';

export const useActivities = () => {
  const { token } = useAuthStore();

  return useQuery(['activities'], () => fetchActivities(token), {
    enabled: !!token,
  });
};
