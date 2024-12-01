import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Crear el stack de navegación
const Stack = createStackNavigator();

// Pantalla de inicio
const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>¡Hola! Bienvenido a la app</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Activities')}
    >
      <Text style={styles.buttonText}>Ver Actividades</Text>
    </TouchableOpacity>
  </View>
);

// Pantalla de Actividades
const ActivitiesScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Actividades Recientes</Text>
    {/* Aquí puedes añadir los datos dinámicos de las actividades */}
    <Text style={styles.text}>Actividad 1: Correr 5 km</Text>
    <Text style={styles.text}>Actividad 2: Bicicleta 10 km</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('MonthlyStats')}
    >
      <Text style={styles.buttonText}>Ver Estadísticas Mensuales</Text>
    </TouchableOpacity>
  </View>
);

// Pantalla de Estadísticas Mensuales
const MonthlyStatsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Estadísticas Mensuales</Text>
    <Text style={styles.text}>Distancia Total: 100 km</Text>
    <Text style={styles.text}>Tiempo Total: 10 horas</Text>
    <Text style={styles.text}>Elevación Total: 500 m</Text>
  </View>
);

// Componente principal de la aplicación
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="MonthlyStats" component={MonthlyStatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos personalizados
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
