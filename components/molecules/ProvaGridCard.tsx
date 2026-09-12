import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Prova } from '@/data/mockProvas';

interface Props {
  prova: Prova;
  onPress: () => void;
}

export function ProvaGridCard({ prova, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>🧰</Text> 
      <Text style={styles.name} numberOfLines={2}>{prova.name}</Text>
      <Text style={styles.count}>{prova.questionCount} QUESTÕES</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A8CBB8',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    flex: 1,
    minHeight: 140,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#E8F5E9',
  },
  icon: {
    fontSize: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A3622',
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  count: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#2B4A34',
  }
});
