import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './AboutStyle';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About / Contact</Text>
      <Text style={styles.text}>📧 support@cignifi.com</Text>
      <Text style={styles.text}>📞 +91 98765 43210</Text>
    </View>
  );
}
