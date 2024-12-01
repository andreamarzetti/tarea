export const fetchActivities = async (token) => {
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Error fetching activities');
    return response.json();
  };
  