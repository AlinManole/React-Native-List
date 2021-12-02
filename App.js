import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
                <List style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
