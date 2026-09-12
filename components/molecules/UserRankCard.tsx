import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '@/data/mockUsers';
import { useRouter } from 'expo-router';

interface Props {
  user: User;
}

export function UserRankCard({ user }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)/perfil')}>
      <Text style={styles.position}>{user.rankPosition}</Text>
      
      <Text style={styles.avatarMock}>🧑‍🚀</Text>
      
      <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
      
      <View style={styles.scoreRow}>
        <View style={styles.scoreBlock}>
          <Text style={styles.score}>{user.score.toLocaleString('pt-BR')}</Text>
          <Text style={styles.scoreLabel}>PONTOS</Text>
        </View>
        <View style={[styles.gem, { backgroundColor: user.gemColor }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A8CBB8',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8F5E9',
    alignItems: 'center',
    width: 110,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  position: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    alignSelf: 'flex-start',
  },
  avatarMock: {
    fontSize: 48,
    marginVertical: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#1A3622',
    textAlign: 'center',
    marginBottom: 8,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  scoreBlock: {
    alignItems: 'center',
  },
  score: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1A3622',
  },
  scoreLabel: {
    fontSize: 8,
    color: '#2B4A34',
  },
  gem: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  }
});
