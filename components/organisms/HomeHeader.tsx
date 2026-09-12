import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface Props {
  sectionTitle?: string;
}

export function HomeHeader({ sectionTitle }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>⚔️ KNIGHT OF QUESTIONS</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace('/(auth)/login')}
        >
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {sectionTitle ? (
        <View style={styles.sectionBar}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B4A34',
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: 'monospace',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#922B21',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#E74C3C',
    marginLeft: 8,
  },
  logoutText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  sectionBar: {
    backgroundColor: '#1A3622',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#3A5E45',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
});
