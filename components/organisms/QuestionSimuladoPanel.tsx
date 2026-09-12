import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimuladoQuestion } from '@/data/mockProvas';
import { RadioButton } from '@/components/atoms/RadioButton';

interface Props {
  question: SimuladoQuestion;
  index: number;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
}

export function QuestionSimuladoPanel({ question, index, selectedOptionId, onSelectOption }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questão {index + 1}:</Text>
      
      <Text style={styles.statement}>{question.statement}</Text>
      
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <RadioButton 
            key={option.id}
            label={option.label}
            text={option.text}
            selected={selectedOptionId === option.id}
            onSelect={() => onSelectOption(option.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8CBB8',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#E8F5E9',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A3622',
    fontFamily: 'monospace',
    marginBottom: 16,
  },
  statement: {
    fontSize: 14,
    color: '#1A3622',
    lineHeight: 20,
    marginBottom: 24,
  },
  optionsContainer: {
    marginTop: 8,
  }
});
