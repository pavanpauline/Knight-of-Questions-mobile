import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  label: string;
  text: string;
  selected: boolean;
  onSelect: () => void;
}

export function RadioButton({ label, text, selected, onSelect }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect} activeOpacity={0.7}>
      <View style={[styles.circle, selected && styles.circleSelected]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1A3622',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  circleSelected: {
    borderColor: '#2B4A34',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1A3622',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
    color: '#1A3622',
  },
  text: {
    flex: 1,
    color: '#2B4A34',
  }
});
