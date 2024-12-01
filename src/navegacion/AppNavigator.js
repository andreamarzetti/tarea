import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigation/AppNavigator';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import MonthlyStatsScreen from '../screens/MonthlyStatsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Activities" component={ActivitiesScreen} />
    <Stack.Screen name="Stats" component={MonthlyStatsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
