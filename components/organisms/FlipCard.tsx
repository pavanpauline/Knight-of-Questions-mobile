import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { Flashcard } from '@/data/mockDecks';

interface Props {
  card: Flashcard;
}

export function FlipCard({ card }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    Animated.spring(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.container}>
        {/* FRONT */}
        <Animated.View style={[styles.card, styles.cardFront, { transform: [{ rotateY: frontInterpolate }] }]}>
          <View style={styles.cornerBadge}>
            <Text style={styles.cornerBadgeText}>PERGUNTA</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.questionIcon}>❓</Text>
            <Text style={styles.cardText}>{card.front}</Text>
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.categoryText}>{card.category || 'Geral'}</Text>
            <View style={styles.flipHint}>
              <Text style={styles.flipHintText}>🔄 toque para virar</Text>
            </View>
          </View>

          {/* Decorative corner lines */}
          <View style={[styles.cornerDeco, styles.cornerTL]} />
          <View style={[styles.cornerDeco, styles.cornerTR]} />
          <View style={[styles.cornerDeco, styles.cornerBL]} />
          <View style={[styles.cornerDeco, styles.cornerBR]} />
        </Animated.View>

        {/* BACK */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { transform: [{ rotateY: backInterpolate }] },
            StyleSheet.absoluteFillObject,
          ]}
        >
          <View style={[styles.cornerBadge, styles.cornerBadgeBack]}>
            <Text style={[styles.cornerBadgeText, { color: '#1A3622' }]}>RESPOSTA</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.answerIcon}>💡</Text>
            <Text style={[styles.cardText, styles.cardTextBack]}>{card.back}</Text>
          </View>

          <View style={styles.cardFooter}>
            <Text style={[styles.categoryText, { color: '#1A3622' }]}>{card.category || 'Geral'}</Text>
            <View style={[styles.flipHint, { backgroundColor: 'rgba(26,54,34,0.15)' }]}>
              <Text style={[styles.flipHintText, { color: '#1A3622' }]}>🔄 toque para virar</Text>
            </View>
          </View>

          <View style={[styles.cornerDeco, styles.cornerTL, { borderColor: '#1A3622' }]} />
          <View style={[styles.cornerDeco, styles.cornerTR, { borderColor: '#1A3622' }]} />
          <View style={[styles.cornerDeco, styles.cornerBL, { borderColor: '#1A3622' }]} />
          <View style={[styles.cornerDeco, styles.cornerBR, { borderColor: '#1A3622' }]} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const CARD_W = '92%';
const CARD_H = 280;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CARD_H,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: 20,
    padding: 24,
    backfaceVisibility: 'hidden',
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  cardFront: {
    backgroundColor: '#243D2B',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  cardBack: {
    backgroundColor: '#FFD700',
    borderWidth: 2,
    borderColor: '#1A3622',
    // absolute positioned on top of front
    alignSelf: 'center',
  },
  cornerBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFD700',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  cornerBadgeBack: {
    backgroundColor: '#1A3622',
  },
  cornerBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#1A3622',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  questionIcon: {
    fontSize: 32,
  },
  answerIcon: {
    fontSize: 32,
  },
  cardText: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFD700',
    fontFamily: 'monospace',
    lineHeight: 28,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardTextBack: {
    color: '#1A3622',
    textShadowColor: 'transparent',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 11,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  flipHint: {
    backgroundColor: 'rgba(255,215,0,0.15)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  flipHintText: {
    fontSize: 10,
    color: '#FFD700',
    fontFamily: 'monospace',
  },
  // Corner decorations
  cornerDeco: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: '#FFD700',
    borderWidth: 0,
  },
  cornerTL: {
    top: 8,
    left: 8,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  cornerTR: {
    top: 8,
    right: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  cornerBL: {
    bottom: 8,
    left: 8,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  cornerBR: {
    bottom: 8,
    right: 8,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});
