import React from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps, Text } from 'react-native';

interface IconButtonProps extends TouchableOpacityProps {
  icon: string; // just an emoji or simple text for now
}

export function IconButton({ icon, style, ...props }: IconButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2B4A34',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  icon: {
    color: '#FFF',
    fontSize: 16,
  }
});
