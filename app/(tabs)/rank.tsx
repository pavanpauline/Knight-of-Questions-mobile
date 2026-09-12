import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { MOCK_USERS, CURRENT_USER } from '@/data/mockUsers';
import { HomeHeader } from '@/components/organisms/HomeHeader';
import { Podium } from '@/components/organisms/Podium';
import { RankListItem } from '@/components/molecules/RankListItem';
import { UserRankCard } from '@/components/molecules/UserRankCard';

export default function RankScreen() {
  const topUsers = MOCK_USERS.filter((u) => u.rankPosition <= 3);
  const otherUsers = MOCK_USERS.filter((u) => u.rankPosition > 3).sort(
    (a, b) => a.rankPosition - b.rankPosition
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4A34" />

      <View style={styles.headerWrapper}>
        <HomeHeader />
        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.sectionTitle}>🏆 RANKING DE CAVALEIROS</Text>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Podium */}
          <View style={styles.podiumWrapper}>
            <Podium topUsers={topUsers} />
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerLabel}>— CLASSIFICAÇÃO GERAL —</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* List */}
          <View style={styles.listContainer}>
            {otherUsers.map((user) => (
              <RankListItem key={user.id} user={user} />
            ))}
          </View>
        </ScrollView>

        {/* Fixed User Card */}
        <View style={styles.fixedUserCard}>
          <UserRankCard user={CURRENT_USER} />
        </View>
      </View>
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
    fontSize: 18,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 180,
  },
  podiumWrapper: {
    backgroundColor: '#243D2B',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#3A5E45',
    overflow: 'hidden',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A5E45',
  },
  dividerLabel: {
    fontSize: 10,
    color: '#FFD700',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingRight: 140,
    gap: 8,
  },
  fixedUserCard: {
    position: 'absolute',
    bottom: 24,
    right: 16,
  },
});
