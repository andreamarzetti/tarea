import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchMonthlyStats } from '../utils/api';
import useStore from '../store/store';

const MonthlyStatsScreen = ({ navigation }) => {
  // Fetch monthly stats data using React Query
  const { data, isLoading, isError } = useQuery(['monthlyStats'], fetchMonthlyStats);

  // Zustand global state to store selected month
  const setSelectedMonth = useStore((state) => state.setSelectedMonth);

  // Handle navigation to monthly activities
  const handleMonthPress = (month) => {
    setSelectedMonth(month);
    navigation.navigate('Activities', { month });
  };

  // Render each month's stats
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleMonthPress(item.month)}>
      <Text style={styles.monthText}>{item.month}</Text>
      <Text style={styles.statText}>Total Distance: {item.totalDistance} km</Text>
      <Text style={styles.statText}>Total Time: {item.totalTime} hrs</Text>
      <Text style={styles.statText}>Total Elevation: {item.totalElevationGain} m</Text>
    </TouchableOpacity>
  );

  // Loading and error states
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Loading Monthly Stats...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Failed to load monthly stats. Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monthly Stats</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.month}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statText: {
    fontSize: 14,
    color: '#555555',
  },
  listContainer: {
    paddingBottom: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MonthlyStatsScreen;
