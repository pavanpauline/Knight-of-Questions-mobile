import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { HomeHeader } from '@/components/organisms/HomeHeader';
import { StatReportCard } from '@/components/molecules/StatReportCard';
import { VerticalBarChart } from '@/components/molecules/VerticalBarChart';
import { HorizontalBarChart } from '@/components/molecules/HorizontalBarChart';

// --- MOCK DATA ---
const WEEKLY_DATA = {
  stats: { hours: '15.0h', questions: '100', accuracy: '78%', streak: '5 DIAS' },
  hoursChart: [
    { label: 'Seg', value: 2.5, displayValue: '2.5h' },
    { label: 'Ter', value: 1.8, displayValue: '1.8h' },
    { label: 'Qua', value: 3.2, displayValue: '3.2h' },
    { label: 'Qui', value: 0.5, displayValue: '0.5h' },
    { label: 'Sex', value: 2.0, displayValue: '2h' },
    { label: 'Sab', value: 4.0, displayValue: '4h' },
    { label: 'Dom', value: 1.0, displayValue: '1h' },
  ],
  subjectChart: [
    { label: 'Matemática', value: 85 },
    { label: 'Português', value: 70 },
    { label: 'História', value: 95 },
    { label: 'Física', value: 40 },
  ],
};

const MONTHLY_DATA = {
  stats: { hours: '60.0h', questions: '450', accuracy: '74%', streak: '3 MESES' },
  hoursChart: [
    { label: 'Este mês', value: 60, displayValue: '60h' },
    { label: 'Mês passado', value: 45, displayValue: '45h' },
  ],
  subjectChart: [
    { label: 'Matemática', value: 65 },
    { label: 'Português', value: 85 },
    { label: 'História', value: 90 },
    { label: 'Física', value: 50 },
  ],
};

export default function RelatoriosScreen() {
  const router = useRouter();
  const [isWeekly, setIsWeekly] = useState(true);
  const data = isWeekly ? WEEKLY_DATA : MONTHLY_DATA;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      {/* Header */}
      <View style={styles.headerWrapper}>
        <HomeHeader />
        <View style={styles.subHeader}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.subHeaderTitle}>
            📊 RELATÓRIO {isWeekly ? 'SEMANAL' : 'MENSAL'}
          </Text>
          <TouchableOpacity
            style={[styles.toggleBtn, !isWeekly && styles.toggleBtnActive]}
            onPress={() => setIsWeekly(!isWeekly)}
          >
            <Text style={styles.toggleBtnText}>{isWeekly ? 'Semanal' : 'Mensal'} ▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* STATS ROW */}
        <View style={styles.statsRow}>
          <StatReportCard icon="🕒" value={data.stats.hours} label={isWeekly ? 'Horas / semana' : 'Horas / mês'} />
          <StatReportCard icon="🎯" value={data.stats.questions} label="Questões" />
          <StatReportCard icon="📈" value={data.stats.accuracy} label="Acerto" />
          <StatReportCard icon="🔥" value={data.stats.streak} label={isWeekly ? 'Sequência' : 'Meses'} />
        </View>

        {/* HORAS DE ESTUDO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⏱ HORAS DE ESTUDO {isWeekly ? '— SEMANA' : '— MÊS'}</Text>
          {isWeekly ? (
            <VerticalBarChart data={data.hoursChart} maxValue={5} />
          ) : (
            <HorizontalBarChart data={data.hoursChart} maxValue={80} showValueInline={true} />
          )}
        </View>

        {/* DESEMPENHO POR MATÉRIA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📚 DESEMPENHO POR MATÉRIA</Text>
          <HorizontalBarChart data={data.subjectChart} maxValue={100} showValueInline={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A3622',
  },
  headerWrapper: {
    backgroundColor: '#2B4A34',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#1A3622',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  backBtn: {
    width: 36,
    height: 36,
    backgroundColor: '#243D2B',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  toggleBtn: {
    backgroundColor: '#3A5E45',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1.5,
    borderColor: '#5A8C6A',
  },
  toggleBtnActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  toggleBtnText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#E8F5E9',
    fontFamily: 'monospace',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  section: {
    backgroundColor: '#243D2B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#3A5E45',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    marginBottom: 12,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
