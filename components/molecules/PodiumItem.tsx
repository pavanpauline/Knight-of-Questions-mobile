import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '@/data/mockUsers';
import { Avatar } from '../atoms/Avatar';

interface Props {
  user: User;
  position: 1 | 2 | 3;
}

export function PodiumItem({ user, position }: Props) {
  const isFirst = position === 1;
  const height = isFirst ? 100 : 70;
  const color = isFirst ? '#1A3622' : '#A8CBB8';
  
  return (
    <View style={[styles.container, isFirst ? styles.firstContainer : null]}>
      <Avatar size={48} color={user.avatarColor} initial={user.name.charAt(0)} />
      <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
      
      <View style={[styles.block, { height, backgroundColor: color }]}>
        <Text style={[styles.positionText, isFirst ? styles.firstText : null]}>{position}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-end',
  },
  firstContainer: {
    marginHorizontal: 4,
    zIndex: 10,
  },
  name: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#1A3622',
    marginTop: 8,
    marginBottom: 4,
  },
  block: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  positionText: {
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'monospace',
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  firstText: {
    fontSize: 40,
  }
});
