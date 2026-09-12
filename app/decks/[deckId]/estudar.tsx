import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MOCK_DECKS } from '@/data/mockDecks';
import { FlipCard } from '@/components/organisms/FlipCard';

type RatingKey = 'facil' | 'medio' | 'dificil' | 'impossivel';

const RATINGS: { key: RatingKey; icon: string; label: string; color: string }[] = [
  { key: 'facil', icon: '😁', label: 'FÁCIL', color: '#27AE60' },
  { key: 'medio', icon: '🙂', label: 'MÉDIO', color: '#F39C12' },
  { key: 'dificil', icon: '😐', label: 'DIFÍCIL', color: '#E67E22' },
  { key: 'impossivel', icon: '😫', label: 'DE NOVO', color: '#E74C3C' },
];

export default function EstudarScreen() {
  const { deckId } = useLocalSearchParams<{ deckId: string }>();
  const router = useRouter();

  const deck = MOCK_DECKS.find((d) => d.id === deckId);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<string, RatingKey>>({});

  if (!deck || deck.cards.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>📭</Text>
          <Text style={styles.errorText}>Nenhum card disponível.</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const totalCards = deck.cards.length;
  const currentCard = deck.cards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / totalCards) * 100;

  const handleRating = (key: RatingKey) => {
    setRatings((prev) => ({ ...prev, [currentCard.id]: key }));
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex((i) => i + 1);
    }
  };

  const isLast = currentCardIndex === totalCards - 1;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>{deck.name}</Text>
          <Text style={styles.headerSub}>
            {currentCardIndex + 1} / {totalCards} cards
          </Text>
        </View>
        <TouchableOpacity style={styles.endButton} onPress={() => router.back()}>
          <Text style={styles.endButtonText}>Encerrar</Text>
        </TouchableOpacity>
      </View>

      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>

      {/* Card area */}
      <View style={styles.cardArea}>
        <FlipCard card={currentCard} />

        {/* Navigation row */}
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navBtn, currentCardIndex === 0 && styles.navBtnDisabled]}
            disabled={currentCardIndex === 0}
            onPress={() => setCurrentCardIndex((i) => Math.max(0, i - 1))}
          >
            <Text style={styles.navBtnText}>‹ Anterior</Text>
          </TouchableOpacity>

          <View style={styles.cardCounter}>
            {deck.cards.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.dot,
                  idx === currentCardIndex && styles.dotActive,
                  ratings[deck.cards[idx].id] && styles.dotRated,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.navBtn, isLast && styles.navBtnDisabled]}
            disabled={isLast}
            onPress={() => setCurrentCardIndex((i) => Math.min(totalCards - 1, i + 1))}
          >
            <Text style={styles.navBtnText}>Próximo ›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer — Rating buttons */}
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Como foi esse card?</Text>
        <View style={styles.ratingRow}>
          {RATINGS.map((r) => (
            <TouchableOpacity
              key={r.key}
              style={[
                styles.ratingBtn,
                { borderColor: r.color },
                ratings[currentCard.id] === r.key && { backgroundColor: r.color },
              ]}
              onPress={() => handleRating(r.key)}
              activeOpacity={0.75}
            >
              <Text style={styles.ratingIcon}>{r.icon}</Text>
              <Text
                style={[
                  styles.ratingLabel,
                  ratings[currentCard.id] === r.key && { color: '#FFF' },
                ]}
              >
                {r.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {isLast && (
          <TouchableOpacity style={styles.finishBtn} onPress={() => router.back()}>
            <Text style={styles.finishBtnText}>🏆 Concluir Revisão</Text>
          </TouchableOpacity>
        )}
      </View>
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
  headerCenter: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headerSub: {
    fontSize: 11,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  endButton: {
    backgroundColor: '#922B21',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#E74C3C',
  },
  endButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  progressTrack: {
    height: 4,
    backgroundColor: '#243D2B',
  },
  progressFill: {
    height: 4,
    backgroundColor: '#FFD700',
  },
  cardArea: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    gap: 16,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  navBtn: {
    backgroundColor: '#243D2B',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#3A5E45',
  },
  navBtnDisabled: {
    opacity: 0.3,
  },
  navBtnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  cardCounter: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 180,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3A5E45',
  },
  dotActive: {
    backgroundColor: '#FFD700',
    width: 16,
  },
  dotRated: {
    backgroundColor: '#27AE60',
  },
  footer: {
    backgroundColor: '#243D2B',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 2,
    borderTopColor: '#3A5E45',
    gap: 12,
  },
  footerLabel: {
    fontSize: 12,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  ratingBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#1A3622',
    gap: 4,
  },
  ratingIcon: {
    fontSize: 22,
  },
  ratingLabel: {
    fontSize: 8,
    color: '#A8CBB8',
    fontWeight: '900',
    fontFamily: 'monospace',
  },
  finishBtn: {
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  finishBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1A3622',
    fontFamily: 'monospace',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
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
