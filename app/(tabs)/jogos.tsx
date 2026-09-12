import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { HomeHeader } from '@/components/organisms/HomeHeader';

type GameMode = {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  borderColor: string;
  tag: string;
};

const GAME_MODES: GameMode[] = [
  {
    id: 'battle',
    label: 'BATALHA',
    icon: '⚔️',
    description: 'Desafie outros cavaleiros em tempo real',
    color: '#7B241C',
    borderColor: '#E74C3C',
    tag: 'MULTIJOGADOR',
  },
  {
    id: 'quiz',
    label: 'QUIZ RÁPIDO',
    icon: '⚡',
    description: 'Responda rápido e ganhe pontos extras',
    color: '#B7950B',
    borderColor: '#F4D03F',
    tag: 'SOLO',
  },
  {
    id: 'survival',
    label: 'SOBREVIVÊNCIA',
    icon: '🛡️',
    description: 'Quantas questões você aguenta sem errar?',
    color: '#1A5276',
    borderColor: '#3498DB',
    tag: 'DESAFIO',
  },
  {
    id: 'daily',
    label: 'MISSÃO DIÁRIA',
    icon: '📅',
    description: 'Complete a missão do dia e ganhe XP',
    color: '#145A32',
    borderColor: '#27AE60',
    tag: 'DIÁRIO',
  },
];

export default function JogosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      <View style={styles.headerWrapper}>
        <HomeHeader />
        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.sectionTitle}>🎮 MODOS DE JOGO</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Coming soon banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerIcon}>🚧</Text>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>EM BREVE!</Text>
            <Text style={styles.bannerSub}>Os modos multijogador estão sendo forjados nas masmorras...</Text>
          </View>
        </View>

        {/* Game modes grid */}
        <View style={styles.grid}>
          {GAME_MODES.map((mode) => (
            <TouchableOpacity
              key={mode.id}
              style={[styles.card, { backgroundColor: mode.color, borderColor: mode.borderColor }]}
              activeOpacity={0.8}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>{mode.icon}</Text>
                <View style={[styles.tagBadge, { borderColor: mode.borderColor }]}>
                  <Text style={[styles.tagText, { color: mode.borderColor }]}>{mode.tag}</Text>
                </View>
              </View>
              <Text style={styles.cardLabel}>{mode.label}</Text>
              <Text style={styles.cardDesc}>{mode.description}</Text>
              <View style={[styles.cardAccent, { backgroundColor: mode.borderColor }]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Leaderboard teaser */}
        <View style={styles.teaserCard}>
          <Text style={styles.teaserTitle}>🏆 SEU PLACAR</Text>
          <View style={styles.teaserRow}>
            <View style={styles.teaserItem}>
              <Text style={styles.teaserVal}>0</Text>
              <Text style={styles.teaserLabel}>Batalhas vencidas</Text>
            </View>
            <View style={styles.teaserDivider} />
            <View style={styles.teaserItem}>
              <Text style={styles.teaserVal}>0</Text>
              <Text style={styles.teaserLabel}>XP de jogos</Text>
            </View>
            <View style={styles.teaserDivider} />
            <View style={styles.teaserItem}>
              <Text style={styles.teaserVal}>—</Text>
              <Text style={styles.teaserLabel}>Melhor sequência</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#243D2B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
    alignItems: 'center',
    gap: 12,
  },
  bannerIcon: {
    fontSize: 32,
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  bannerSub: {
    fontSize: 11,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  card: {
    width: '47.5%',
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 2,
    padding: 14,
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardIcon: {
    fontSize: 32,
  },
  tagBadge: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  tagText: {
    fontSize: 8,
    fontWeight: '900',
    fontFamily: 'monospace',
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardDesc: {
    fontSize: 10,
    color: '#C8E6C9',
    fontFamily: 'monospace',
  },
  cardAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  teaserCard: {
    backgroundColor: '#243D2B',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#FFD700',
  },
  teaserTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 16,
  },
  teaserRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teaserItem: {
    flex: 1,
    alignItems: 'center',
  },
  teaserVal: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  teaserLabel: {
    fontSize: 9,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 4,
  },
  teaserDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#3A5E45',
  },
});
