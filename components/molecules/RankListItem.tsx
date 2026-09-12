import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '@/data/mockUsers';
import { Avatar } from '../atoms/Avatar';

interface Props {
  user: User;
}

export function RankListItem({ user }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.position}>{user.rankPosition}</Text>
      <Avatar size={36} color={user.avatarColor} initial={user.name.charAt(0)} />
      
      <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{user.score.toLocaleString('pt-BR')}</Text>
        <Text style={styles.scoreLabel}>PONTOS</Text>
      </View>
      
      <View style={[styles.gem, { backgroundColor: user.gemColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A3622',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#2B4A34',
  },
  position: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#FFD700',
    width: 32,
    textAlign: 'center',
    marginRight: 8,
  },
  name: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#FFF',
    marginLeft: 12,
  },
  scoreContainer: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  score: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  scoreLabel: {
    fontSize: 8,
    color: '#A8CBB8',
  },
  gem: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFF',
  }
});
