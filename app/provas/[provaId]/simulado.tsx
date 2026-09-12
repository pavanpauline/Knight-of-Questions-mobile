import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { QuestionSimuladoPanel } from '@/components/organisms/QuestionSimuladoPanel';
import { GridNumberButton } from '@/components/atoms/GridNumberButton';
import { MOCK_PROVAS } from '@/data/mockProvas';

type TabKey = 'questao' | 'grade' | 'notas';

export default function SimuladoScreen() {
  const router = useRouter();
  const { provaId } = useLocalSearchParams<{ provaId: string }>();

  const prova = MOCK_PROVAS.find((p) => p.id === provaId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('questao');

  if (!prova || prova.questions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorText}>Esta prova não possui questões para simular.</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const questions = prova.questions;
  const currentQuestion = questions[currentIndex];

  const answeredIndexes = questions
    .map((q, i) => (answers[q.id] ? i : -1))
    .filter((i) => i !== -1);

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleNoteChange = (text: string) => {
    setNotes((prev) => ({ ...prev, [currentQuestion.id]: text }));
  };

  const handleSubmit = () => {
    const unanswered = questions.length - Object.keys(answers).length;
    if (unanswered > 0) {
      Alert.alert(
        'Questões em aberto',
        `Você ainda tem ${unanswered} questão(ões) sem resposta. Deseja enviar mesmo assim?`,
        [
          { text: 'Continuar revisando', style: 'cancel' },
          { text: 'Enviar assim mesmo', onPress: () => setShowResult(true) },
        ]
      );
    } else {
      setShowResult(true);
    }
  };

  const correctCount = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
  const score = Math.round((correctCount / questions.length) * 100);

  const TABS: { key: TabKey; label: string; icon: string }[] = [
    { key: 'questao', label: 'Questão', icon: '⚔️' },
    { key: 'grade', label: 'Grade', icon: '🗺️' },
    { key: 'notas', label: 'Notas', icon: '📝' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>⚔️ {prova.name}</Text>
          <Text style={styles.headerSub}>SIMULADO</Text>
        </View>
        <View style={styles.progressBadge}>
          <Text style={styles.progressText}>
            {Object.keys(answers).length}/{questions.length}
          </Text>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${(Object.keys(answers).length / questions.length) * 100}%` },
          ]}
        />
      </View>

      {/* Prev / Next nav */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navBtn, currentIndex === 0 && styles.navBtnDisabled]}
          onPress={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navBtnText}>‹ Anterior</Text>
        </TouchableOpacity>

        <Text style={styles.navCounter}>
          Questão {currentIndex + 1} de {questions.length}
        </Text>

        <TouchableOpacity
          style={[styles.navBtn, currentIndex === questions.length - 1 && styles.navBtnDisabled]}
          onPress={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
          disabled={currentIndex === questions.length - 1}
        >
          <Text style={styles.navBtnText}>Próxima ›</Text>
        </TouchableOpacity>
      </View>

      {/* Tab bar */}
      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabBtn, activeTab === tab.key && styles.tabBtnActive]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, activeTab === tab.key && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {activeTab === 'questao' && (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.tabScrollContent}>
            <QuestionSimuladoPanel
              question={currentQuestion}
              index={currentIndex}
              selectedOptionId={answers[currentQuestion.id] ?? null}
              onSelectOption={handleSelectOption}
            />

            {/* Answered indicator */}
            {answers[currentQuestion.id] && (
              <View style={styles.answeredBanner}>
                <Text style={styles.answeredBannerText}>
                  ✅ Alternativa {questions[currentIndex].options.find(o => o.id === answers[currentQuestion.id])?.label} marcada
                </Text>
              </View>
            )}
          </ScrollView>
        )}

        {activeTab === 'grade' && (
          <ScrollView contentContainerStyle={styles.gradeContent}>
            <Text style={styles.gradeTitle}>Navegação Rápida</Text>
            <View style={styles.gradeGrid}>
              {questions.map((_, index) => (
                <GridNumberButton
                  key={index}
                  number={index + 1}
                  isAnswered={answeredIndexes.includes(index)}
                  isCurrent={currentIndex === index}
                  onPress={() => {
                    setCurrentIndex(index);
                    setActiveTab('questao');
                  }}
                />
              ))}
            </View>

            {/* Markers legend */}
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#FFD700' }]} />
                <Text style={styles.legendText}>Atual</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#27AE60' }]} />
                <Text style={styles.legendText}>Respondida</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#3A5E45' }]} />
                <Text style={styles.legendText}>Não respondida</Text>
              </View>
            </View>

            {/* Submit button */}
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>📤 ENVIAR SIMULADO</Text>
            </TouchableOpacity>
          </ScrollView>
        )}

        {activeTab === 'notas' && (
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>
              📝 Anotações — Questão {currentIndex + 1}
            </Text>
            <TextInput
              style={styles.notesInput}
              multiline
              placeholder={`Escreva suas observações sobre a questão ${currentIndex + 1}...`}
              placeholderTextColor="#6A9E7A"
              value={notes[currentQuestion.id] || ''}
              onChangeText={handleNoteChange}
              textAlignVertical="top"
            />
          </View>
        )}
      </View>

      {/* Result Modal */}
      <Modal visible={showResult} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.resultCard}>
            <Text style={styles.resultIcon}>
              {score >= 70 ? '🏆' : score >= 50 ? '⚔️' : '💀'}
            </Text>
            <Text style={styles.resultTitle}>SIMULADO CONCLUÍDO</Text>
            <Text style={styles.resultProvaName}>{prova.name}</Text>

            <View style={styles.scoreCircle}>
              <Text style={styles.scoreNumber}>{score}%</Text>
              <Text style={styles.scoreLabel}>ACERTOS</Text>
            </View>

            <View style={styles.resultStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{correctCount}</Text>
                <Text style={styles.statLabel}>Corretas ✅</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{questions.length - correctCount}</Text>
                <Text style={styles.statLabel}>Erradas ❌</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{questions.length - Object.keys(answers).length}</Text>
                <Text style={styles.statLabel}>Em branco ⬜</Text>
              </View>
            </View>

            <Text
              style={[
                styles.resultMessage,
                { color: score >= 70 ? '#27AE60' : score >= 50 ? '#F39C12' : '#E74C3C' },
              ]}
            >
              {score >= 70
                ? '🌟 Excelente desempenho, cavaleiro!'
                : score >= 50
                ? '⚔️ Bom esforço! Continue treinando.'
                : '📖 Revisite o conteúdo e tente novamente.'}
            </Text>

            <TouchableOpacity style={styles.finishBtn} onPress={() => router.back()}>
              <Text style={styles.finishBtnText}>← Voltar para a Prova</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A3622',
  },

  // HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B4A34',
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
    gap: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#1A3622',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  backButtonText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerCenter: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headerSub: {
    fontSize: 10,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  progressBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A3622',
    fontFamily: 'monospace',
  },

  // PROGRESS BAR
  progressTrack: {
    height: 4,
    backgroundColor: '#243D2B',
  },
  progressFill: {
    height: 4,
    backgroundColor: '#FFD700',
  },

  // NAV ROW
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#243D2B',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3A5E45',
  },
  navBtn: {
    backgroundColor: '#3A5E45',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#5A8C6A',
  },
  navBtnDisabled: {
    opacity: 0.3,
  },
  navBtnText: {
    color: '#E8F5E9',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  navCounter: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFD700',
    fontFamily: 'monospace',
  },

  // TAB BAR
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1A3622',
    borderBottomWidth: 2,
    borderBottomColor: '#3A5E45',
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 6,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: {
    borderBottomColor: '#FFD700',
    backgroundColor: '#243D2B',
  },
  tabIcon: {
    fontSize: 14,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6A9E7A',
    fontFamily: 'monospace',
  },
  tabLabelActive: {
    color: '#FFD700',
  },

  // TAB CONTENT
  tabContent: {
    flex: 1,
  },
  tabScrollContent: {
    padding: 12,
    gap: 12,
    paddingBottom: 32,
  },
  answeredBanner: {
    backgroundColor: '#145A32',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#27AE60',
    alignItems: 'center',
  },
  answeredBannerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#27AE60',
    fontFamily: 'monospace',
  },

  // GRADE TAB
  gradeContent: {
    padding: 16,
    gap: 16,
    paddingBottom: 32,
  },
  gradeTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  gradeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 11,
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  submitBtn: {
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1A3622',
    fontFamily: 'monospace',
  },

  // NOTES TAB
  notesContainer: {
    flex: 1,
    padding: 16,
    gap: 10,
  },
  notesTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  notesInput: {
    flex: 1,
    backgroundColor: '#243D2B',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#3A5E45',
    padding: 14,
    fontSize: 14,
    color: '#E8F5E9',
    fontFamily: 'monospace',
    lineHeight: 22,
  },

  // ERROR
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 32,
  },
  errorIcon: { fontSize: 48 },
  errorText: {
    fontSize: 16,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  backBtn: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backBtnText: {
    color: '#1A3622',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },

  // RESULT MODAL
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.88)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  resultCard: {
    backgroundColor: '#2B4A34',
    borderRadius: 20,
    padding: 28,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFD700',
    gap: 10,
  },
  resultIcon: { fontSize: 52 },
  resultTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  resultProvaName: {
    fontSize: 12,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  scoreCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#1A3622',
    borderWidth: 4,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  scoreNumber: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  resultStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  statItem: { alignItems: 'center', gap: 4 },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E8F5E9',
    fontFamily: 'monospace',
  },
  statLabel: {
    fontSize: 10,
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  statDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#3A5E45',
  },
  resultMessage: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  finishBtn: {
    marginTop: 4,
    backgroundColor: '#FFD700',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  finishBtnText: {
    color: '#1A3622',
    fontSize: 14,
    fontWeight: '900',
    fontFamily: 'monospace',
  },
});
