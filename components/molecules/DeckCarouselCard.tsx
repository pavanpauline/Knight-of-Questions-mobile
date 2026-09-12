import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Deck } from '@/data/mockDecks';

interface Props {
  deck: Deck;
  onPress: () => void;
}

export function DeckCarouselCard({ deck, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>🧰</Text> 
      <Text style={styles.name} numberOfLines={2}>{deck.name}</Text>
      <Text style={styles.description} numberOfLines={3}>{deck.description}</Text>
      <Text style={styles.count}>{deck.cards.length} CARDS</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A8CBB8',
    width: 220,
    height: 260,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#E8F5E9',
  },
  icon: {
    fontSize: 48,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A3622',
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#2B4A34',
    marginBottom: 8,
  },
  count: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#1A3622',
  }
});
