import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { CURRENT_USER } from '@/data/mockUsers';
import { Avatar } from '@/components/atoms/Avatar';
import { StatCard } from '@/components/molecules/StatCard';

const MEDALS = [
  { icon: '🥇', label: '1º Lugar' },
  { icon: '🔥', label: 'Em Chamas' },
  { icon: '🧠', label: 'Gênio' },
  { icon: '🏆', label: 'Campeão' },
  { icon: '⚔️', label: 'Guerreiro' },
  { icon: '💎', label: 'Diamante' },
];

export default function PerfilScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>⚔️ PERFIL DO CAVALEIRO</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarRing}>
            <Avatar size={100} color={CURRENT_USER.avatarColor} initial={CURRENT_USER.name.charAt(0)} />
          </View>
          <Text style={styles.name}>{CURRENT_USER.name}</Text>
          <View style={styles.titleBadge}>
            <Text style={styles.titleBadgeText}>⚔️ {CURRENT_USER.rankTitle}</Text>
          </View>
          <View style={styles.rankRow}>
            <Text style={styles.rankLabel}>Posição Global:</Text>
            <Text style={styles.rankValue}>#{CURRENT_USER.rankPosition}</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <Text style={styles.sectionTitle}>📊 ESTATÍSTICAS</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statsRow}>
            <StatCard title="PONTUAÇÃO TOTAL" value={CURRENT_USER.score.toLocaleString('pt-BR')} />
            <StatCard title="POSIÇÃO RANKING" value={`#${CURRENT_USER.rankPosition}`} />
          </View>
          <View style={styles.statsRow}>
            <StatCard title="DECKS CRIADOS" value={12} />
            <StatCard title="CARDS ESTUDADOS" value={1450} />
          </View>
        </View>

        {/* Medals */}
        <Text style={styles.sectionTitle}>🏅 MEDALHAS CONQUISTADAS</Text>
        <View style={styles.medalsContainer}>
          {MEDALS.map((m) => (
            <View key={m.label} style={styles.medalItem}>
              <Text style={styles.medalIcon}>{m.icon}</Text>
              <Text style={styles.medalLabel}>{m.label}</Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.actionBtn, styles.editBtn]}>
            <Text style={styles.actionBtnText}>✏️  EDITAR PERFIL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, styles.logoutBtn]}
            onPress={() => router.replace('/(auth)/login')}
          >
            <Text style={styles.actionBtnText}>🚪  SAIR</Text>
          </TouchableOpacity>
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
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  avatarSection: {
    alignItems: 'center',
    backgroundColor: '#243D2B',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  avatarRing: {
    padding: 4,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFD700',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 8,
  },
  titleBadge: {
    backgroundColor: '#1A3622',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1.5,
    borderColor: '#FFD700',
    marginBottom: 12,
  },
  titleBadgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rankLabel: {
    fontSize: 12,
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  rankValue: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    marginBottom: 12,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  statsGrid: {
    marginBottom: 24,
    gap: 8,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  medalsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  medalItem: {
    backgroundColor: '#243D2B',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1.5,
    borderColor: '#3A5E45',
  },
  medalIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  medalLabel: {
    fontSize: 9,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  actions: {
    gap: 12,
  },
  actionBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
  },
  editBtn: {
    backgroundColor: '#2980B9',
    borderColor: '#3498DB',
  },
  logoutBtn: {
    backgroundColor: '#922B21',
    borderColor: '#E74C3C',
  },
  actionBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFF',
    fontFamily: 'monospace',
  },
});
