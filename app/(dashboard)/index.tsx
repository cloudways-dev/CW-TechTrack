// app/dashboard/index.tsx
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Technician Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
