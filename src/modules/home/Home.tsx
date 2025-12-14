import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeStyle';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>Welcome to your dashboard 🎉</Text>
    </View>
  );
}
