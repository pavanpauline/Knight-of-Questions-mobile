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

type NavItem = {
  label: string;
  icon: string;
  route: '/(tabs)/questoes' | '/(tabs)/jogos' | '/(tabs)/decks' | '/(tabs)/relatorios';
  color: string;
  borderColor: string;
  description: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: 'QUESTÕES',
    icon: '⚔️',
    route: '/(tabs)/questoes',
    color: '#1D4E89',
    borderColor: '#3498DB',
    description: 'Minhas Provas',
  },
  {
    label: 'JOGOS',
    icon: '🎮',
    route: '/(tabs)/jogos',
    color: '#145A32',
    borderColor: '#27AE60',
    description: 'Modo Batalha',
  },
  {
    label: 'DECKS',
    icon: '📚',
    route: '/(tabs)/decks',
    color: '#4A235A',
    borderColor: '#9B59B6',
    description: 'Meus Flashcards',
  },
  {
    label: 'RELATÓRIOS',
    icon: '📊',
    route: '/(tabs)/relatorios',
    color: '#78281F',
    borderColor: '#E74C3C',
    description: 'Meu Desempenho',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />
      <HomeHeader />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Welcome banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>⚔️  Bem-vindo de volta, Cavaleiro!</Text>
          <Text style={styles.bannerSub}>Escolha sua batalha de hoje</Text>
        </View>

        {/* 2x2 Grid */}
        <View style={styles.grid}>
          {NAV_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.route}
              style={[styles.card, { backgroundColor: item.color, borderColor: item.borderColor }]}
              onPress={() => router.push(item.route)}
              activeOpacity={0.8}
            >
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <Text style={styles.cardLabel}>{item.label}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
              <View style={[styles.cardAccent, { backgroundColor: item.borderColor }]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick stats row */}
        <View style={styles.quickStats}>
          <View style={styles.statChip}>
            <Text style={styles.statChipVal}>🔥 5</Text>
            <Text style={styles.statChipLabel}>Dias seguidos</Text>
          </View>
          <View style={styles.statChip}>
            <Text style={styles.statChipVal}>⚡ 78%</Text>
            <Text style={styles.statChipLabel}>Taxa de acerto</Text>
          </View>
          <View style={styles.statChip}>
            <Text style={styles.statChipVal}>🏆 #4</Text>
            <Text style={styles.statChipLabel}>Ranking</Text>
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
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  banner: {
    backgroundColor: '#243D2B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  bannerText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bannerSub: {
    fontSize: 12,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    marginTop: 4,
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
    padding: 16,
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  cardIcon: {
    fontSize: 36,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardDesc: {
    fontSize: 11,
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
  quickStats: {
    flexDirection: 'row',
    gap: 10,
  },
  statChip: {
    flex: 1,
    backgroundColor: '#243D2B',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3A5E45',
  },
  statChipVal: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  statChipLabel: {
    fontSize: 9,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    marginTop: 4,
    textAlign: 'center',
  },
});
