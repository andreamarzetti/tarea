import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityCard = ({ activity }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{activity.name}</Text>
    <Text>{new Date(activity.start_date).toLocaleDateString()}</Text>
    <Text>Distance: {activity.distance} meters</Text>
    <Text>Time: {activity.moving_time} seconds</Text>
    <Text>Elevation: {activity.total_elevation_gain} meters</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
  title: { fontSize: 16, fontWeight: 'bold' },
});

export default ActivityCard;
