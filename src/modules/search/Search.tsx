import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './SearchStyle';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput placeholder="Search here..." style={styles.input} />
    </View>
  );
}
