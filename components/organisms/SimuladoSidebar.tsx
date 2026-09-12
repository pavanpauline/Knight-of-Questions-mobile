import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GridNumberButton } from '@/components/atoms/GridNumberButton';
import { Button } from '@/components/atoms/Button';

interface Props {
  totalQuestions: number;
  currentQuestionIndex: number;
  answeredIndexes: number[];
  onChangeQuestion: (index: number) => void;
  onSubmit: () => void;
}

export function SimuladoSidebar({ totalQuestions, currentQuestionIndex, answeredIndexes, onChangeQuestion, onSubmit }: Props) {
  // Generate array [0, 1, ..., totalQuestions - 1]
  const questionIndexes = Array.from({ length: totalQuestions }, (_, i) => i);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {questionIndexes.map((index) => (
          <GridNumberButton
            key={index}
            number={index + 1}
            isAnswered={answeredIndexes.includes(index)}
            isCurrent={currentQuestionIndex === index}
            onPress={() => onChangeQuestion(index)}
          />
        ))}
      </View>

      <View style={styles.markersRow}>
        <View style={[styles.marker, { backgroundColor: '#3498DB' }]} />
        <View style={[styles.marker, { backgroundColor: '#F1C40F' }]} />
        <View style={[styles.marker, { backgroundColor: '#E74C3C' }]} />
        <View style={[styles.marker, { backgroundColor: '#27AE60' }]} />
        <Text style={styles.markerIcon}>🖊️</Text>
      </View>

      <Button title="ENVIAR" onPress={onSubmit} style={styles.submitBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: '#A8CBB8',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  markersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  markerIcon: {
    fontSize: 16,
    marginLeft: 4,
  },
  submitBtn: {
    backgroundColor: '#1A3622',
    width: '100%',
    paddingVertical: 12,
  }
});
