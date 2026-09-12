import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimuladoQuestion } from '@/data/mockProvas';
import { IconButton } from '@/components/atoms/IconButton';

interface Props {
  question: SimuladoQuestion;
}

export function QuestionPreviewCard({ question }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.subject} numberOfLines={1}>{question.subject}</Text>
      
      <View style={styles.statementContainer}>
        <Text style={styles.statement} numberOfLines={2}>
          {question.statement || "ENUNCIADO..."}
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.difficulty}>{question.difficulty}</Text>
        <View style={styles.actions}>
          <IconButton icon="✏️" onPress={() => {}} style={styles.smallAction} />
          <IconButton icon="▶️" onPress={() => {}} style={styles.smallAction} />
          <IconButton icon="🗑️" onPress={() => {}} style={styles.smallAction} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A8CBB8',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    flex: 1,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  subject: {
    fontSize: 8,
    color: '#2B4A34',
    marginBottom: 8,
  },
  statementContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  statement: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A3622',
    fontFamily: 'monospace',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  difficulty: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2B4A34',
  },
  actions: {
    flexDirection: 'row',
  },
  smallAction: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginHorizontal: 2,
  }
});
