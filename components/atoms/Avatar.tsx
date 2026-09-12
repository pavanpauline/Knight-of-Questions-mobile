import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface AvatarProps {
  size?: number;
  color?: string;
  initial?: string;
}

export function Avatar({ size = 48, color = '#A8CBB8', initial = '' }: AvatarProps) {
  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2, backgroundColor: color }]}>
      {initial ? <Text style={[styles.text, { fontSize: size / 2 }]}>{initial}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E8F5E9',
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
  }
});
