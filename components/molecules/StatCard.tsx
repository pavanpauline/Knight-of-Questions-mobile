import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  value: string | number;
}

export function StatCard({ title, value }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#243D2B',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#3A5E45',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 4,
    minHeight: 90,
  },
  title: {
    fontSize: 9,
    color: '#FFD700',
    fontWeight: '900',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 22,
    fontWeight: '900',
    color: '#E8F5E9',
    fontFamily: 'monospace',
  }
});
