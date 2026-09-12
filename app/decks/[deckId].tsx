import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MOCK_DECKS } from '@/data/mockDecks';
import { FlashcardGridItem } from '@/components/molecules/FlashcardGridItem';

export default function DeckDetailsScreen() {
  const { deckId } = useLocalSearchParams<{ deckId: string }>();
  const router = useRouter();

  const deck = MOCK_DECKS.find((d) => d.id === deckId);

  if (!deck) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorText}>Deck não encontrado.</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{deck.name}</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Subtitle row */}
      <View style={styles.subtitleRow}>
        <Text style={styles.subtitleText}>📚 KNIGHT OF QUESTIONS</Text>
        <Text style={styles.countBadge}>{deck.cardCount} CARDS</Text>
      </View>

      {/* Action buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.studyBtn]}
          onPress={() => router.push(`/decks/${deckId}/estudar` as any)}
        >
          <Text style={styles.actionBtnText}>▶ Estudar Agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.addBtn]}>
          <Text style={styles.actionBtnText}>+ Adicionar Card</Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <FlatList
        data={deck.cards}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => <FlashcardGridItem card={item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={styles.emptyText}>Nenhum card ainda.</Text>
            <Text style={styles.emptySubText}>Toque em "Adicionar Card" para começar.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A3622',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B4A34',
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#1A3622',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  backButtonText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#243D2B',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  subtitleText: {
    fontSize: 11,
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  countBadge: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFD700',
    backgroundColor: '#1A3622',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD700',
    fontFamily: 'monospace',
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    backgroundColor: '#1A3622',
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  studyBtn: {
    backgroundColor: '#27AE60',
    borderColor: '#2ECC71',
  },
  addBtn: {
    backgroundColor: '#2980B9',
    borderColor: '#3498DB',
  },
  actionBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'monospace',
  },
  grid: {
    padding: 12,
    paddingBottom: 32,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 18,
    color: '#A8CBB8',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  emptySubText: {
    fontSize: 13,
    color: '#6A9E7A',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#1A3622',
  },
  errorIcon: {
    fontSize: 48,
  },
  errorText: {
    fontSize: 16,
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  backBtn: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backBtnText: {
    color: '#1A3622',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
