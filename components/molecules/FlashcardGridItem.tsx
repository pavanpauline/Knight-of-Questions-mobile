import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Flashcard } from '@/data/mockDecks';
import { IconButton } from '@/components/atoms/IconButton';

interface Props {
  card: Flashcard;
}

export function FlashcardGridItem({ card }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.category} numberOfLines={1}>{card.category}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>{card.title}</Text>
      </View>
      <View style={styles.actions}>
        <IconButton icon="✏️" onPress={() => {}} />
        <IconButton icon="▶️" onPress={() => {}} />
        <IconButton icon="🗑️" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A8CBB8',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    flex: 1, // To flex inside grid
    minHeight: 140,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 10,
    color: '#2B4A34',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A3622',
    fontFamily: 'monospace',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  }
});
