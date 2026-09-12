import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { HomeHeader } from '@/components/organisms/HomeHeader';
import { ProvaGridCard } from '@/components/molecules/ProvaGridCard';
import { MOCK_PROVAS } from '@/data/mockProvas';

type FilterType = 'minhas' | 'vestibulares' | 'disciplina';

export default function QuestoesScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>('minhas');

  const filters: { key: FilterType; label: string }[] = [
    { key: 'minhas', label: 'Criar Nova Prova' },
    { key: 'vestibulares', label: 'Vestibulares' },
    { key: 'disciplina', label: 'Estudar por Disciplina' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      {/* Header */}
      <View style={styles.headerWrapper}>
        <HomeHeader />
        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.sectionTitle}>📜 MINHAS PROVAS</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.filterRow}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f.key}
            style={[styles.filterBtn, activeFilter === f.key && styles.filterBtnActive]}
            onPress={() => setActiveFilter(f.key)}
          >
            <Text style={[styles.filterText, activeFilter === f.key && styles.filterTextActive]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Grid de Provas */}
      <FlatList
        data={MOCK_PROVAS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <ProvaGridCard
            prova={item}
            onPress={() => router.push(`/provas/${item.id}` as any)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhuma prova encontrada.</Text>
          </View>
        }
      />
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
  sectionTitleWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1A3622',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: '#243D2B',
  },
  filterBtn: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: '#3A5E45',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#5A8C6A',
    alignItems: 'center',
  },
  filterBtnActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  filterText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#C8E6C9',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  filterTextActive: {
    color: '#1A3622',
  },
  grid: {
    padding: 12,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  emptyText: {
    color: '#A8CBB8',
    fontSize: 16,
    fontFamily: 'monospace',
  },
});
