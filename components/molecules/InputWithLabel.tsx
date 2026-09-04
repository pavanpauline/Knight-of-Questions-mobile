import React from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import { Text } from '../atoms/Text';
import { Input } from '../atoms/Input';

interface InputWithLabelProps extends TextInputProps {
  label: string;
}

export function InputWithLabel({ label, style, ...props }: InputWithLabelProps) {
  return (
    <View style={[styles.container, style]}>
      <Text variant="body" style={styles.label}>{label}</Text>
      <Input {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: '500',
    color: '#333',
  },
});
