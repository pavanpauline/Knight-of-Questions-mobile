import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  number: number;
  isAnswered: boolean;
  isCurrent: boolean;
  onPress: () => void;
}

export function GridNumberButton({ number, isAnswered, isCurrent, onPress }: Props) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isAnswered && styles.buttonAnswered,
        isCurrent && styles.buttonCurrent
      ]} 
      onPress={onPress}
    >
      <Text style={[styles.text, isCurrent && styles.textCurrent]}>{number}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#A8CBB8',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  buttonAnswered: {
    backgroundColor: '#A8CBB8', // filled visually to show answered
  },
  buttonCurrent: {
    borderColor: '#1A3622',
    borderWidth: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B4A34',
    fontFamily: 'monospace',
  },
  textCurrent: {
    color: '#1A3622',
  }
});
