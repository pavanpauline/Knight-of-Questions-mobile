import React from 'react';
import { View, StyleSheet } from 'react-native';
import { User } from '@/data/mockUsers';
import { PodiumItem } from '../molecules/PodiumItem';

interface Props {
  topUsers: User[];
}

export function Podium({ topUsers }: Props) {
  // Sort or ensure topUsers are [1, 2, 3] positions.
  const first = topUsers.find(u => u.rankPosition === 1);
  const second = topUsers.find(u => u.rankPosition === 2);
  const third = topUsers.find(u => u.rankPosition === 3);

  return (
    <View style={styles.container}>
      {second && <PodiumItem user={second} position={2} />}
      {first && <PodiumItem user={first} position={1} />}
      {third && <PodiumItem user={third} position={3} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#2B4A34',
  }
});
