import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';

const fetchActivities = async (accessToken) => {
  const response = await fetch('https://www.strava.com/api/v3/activities', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.json();
};

const ActivitiesScreen = () => {
  const { access_token: accessToken } = useAuthStore((state) => state.user);

  const { data, isLoading, error } = useQuery(['activities'], () =>
    fetchActivities(accessToken)
  );

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al cargar actividades</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>Nombre: {item.name}</Text>
          <Text>Fecha: {new Date(item.start_date).toLocaleDateString()}</Text>
          <Text>Distancia: {item.distance / 1000} km</Text>
          <Text>Tiempo: {item.moving_time / 60} min</Text>
          <Text>Elevación: {item.total_elevation_gain} m</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ActivitiesScreen;

