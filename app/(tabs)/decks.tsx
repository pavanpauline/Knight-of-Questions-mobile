import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { HomeHeader } from '@/components/organisms/HomeHeader';
import { DeckCarouselCard } from '@/components/molecules/DeckCarouselCard';
import { MOCK_DECKS } from '@/data/mockDecks';

export default function DecksScreen() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  const scrollLeft = () => scrollRef.current?.scrollTo({ x: 0, animated: true });
  const scrollRight = () => scrollRef.current?.scrollTo({ x: 300, animated: true });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      <View style={styles.headerWrapper}>
        <HomeHeader />
        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.sectionTitle}>📚 MEUS DECKS</Text>
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{MOCK_DECKS.length} DECKS</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity onPress={scrollLeft} style={styles.navButton}>
            <Text style={styles.navButtonText}>‹</Text>
          </TouchableOpacity>

          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
          >
            {MOCK_DECKS.map((deck) => (
              <DeckCarouselCard
                key={deck.id}
                deck={deck}
                onPress={() => router.push(`/decks/${deck.id}` as any)}
              />
            ))}
          </ScrollView>

          <TouchableOpacity onPress={scrollRight} style={styles.navButton}>
            <Text style={styles.navButtonText}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Quick actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.actionBtn, styles.actionBtnGreen]}>
            <Text style={styles.actionBtnText}>+ Criar Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.actionBtnBlue]}>
            <Text style={styles.actionBtnText}>🔍 Explorar</Text>
          </TouchableOpacity>
        </View>

        {/* Stats strip */}
        <View style={styles.statsStrip}>
          <View style={styles.stripItem}>
            <Text style={styles.stripVal}>📦 {MOCK_DECKS.reduce((a, d) => a + d.cardCount, 0)}</Text>
            <Text style={styles.stripLabel}>Total de cards</Text>
          </View>
          <View style={styles.stripDivider} />
          <View style={styles.stripItem}>
            <Text style={styles.stripVal}>🔥 3</Text>
            <Text style={styles.stripLabel}>Em revisão hoje</Text>
          </View>
          <View style={styles.stripDivider} />
          <View style={styles.stripItem}>
            <Text style={styles.stripVal}>✅ 87%</Text>
            <Text style={styles.stripLabel}>Taxa média</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A3622',
  },
  headerWrapper: {
    backgroundColor: '#2B4A34',
  },
  sectionTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1A3622',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  countBadge: {
    backgroundColor: '#243D2B',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  countText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  content: {
    flex: 1,
    paddingVertical: 24,
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  carousel: {
    paddingHorizontal: 8,
  },
  navButton: {
    width: 40,
    height: 60,
    backgroundColor: '#243D2B',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  navButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    lineHeight: 32,
  },
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
  },
  actionBtnGreen: {
    backgroundColor: '#27AE60',
    borderColor: '#2ECC71',
  },
  actionBtnBlue: {
    backgroundColor: '#2980B9',
    borderColor: '#3498DB',
  },
  actionBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'monospace',
  },
  statsStrip: {
    flexDirection: 'row',
    backgroundColor: '#243D2B',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3A5E45',
    alignItems: 'center',
  },
  stripItem: {
    flex: 1,
    alignItems: 'center',
  },
  stripVal: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  stripLabel: {
    fontSize: 9,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    marginTop: 4,
    textAlign: 'center',
  },
  stripDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#3A5E45',
  },
});
