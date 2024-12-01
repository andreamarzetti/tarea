import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';
import { useAuthStore } from '../store/authStore';

const CLIENT_ID = 'TU_CLIENT_ID';
const CLIENT_SECRET = 'TU_CLIENT_SECRET';

export const useAuth = () => {
  const { setToken, setRefreshToken } = useAuthStore();

  const [request, response, promptAsync] = useAuthRequest({
    clientId: CLIENT_ID,
    scopes: ['read', 'activity:read'],
    redirectUri: makeRedirectUri({ useProxy: true }),
  });

  const handleAuthResponse = async () => {
    if (response?.type === 'success') {
      const { code } = response.params;
      const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          grant_type: 'authorization_code',
        }),
      });
      const data = await tokenResponse.json();
      setToken(data.access_token);
      setRefreshToken(data.refresh_token);
    }
  };

  return { request, response, promptAsync, handleAuthResponse };
};
