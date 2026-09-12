import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DataPoint {
  label: string;
  value: number;
  displayValue: string;
}

interface Props {
  data: DataPoint[];
  maxValue: number;
}

export function VerticalBarChart({ data, maxValue }: Props) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const heightPercentage = Math.min((item.value / maxValue) * 100, 100);
        return (
          <View key={index} style={styles.barContainer}>
            <Text style={styles.valueText}>{item.displayValue}</Text>
            <View style={styles.barBackground}>
              <View style={[styles.barFill, { height: `${heightPercentage}%` }]} />
            </View>
            <Text style={styles.labelText}>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 120,
    marginTop: 16,
  },
  barContainer: {
    alignItems: 'center',
    width: 30,
    height: '100%',
    justifyContent: 'flex-end',
  },
  valueText: {
    fontSize: 10,
    color: '#1A3622',
    marginBottom: 4,
  },
  barBackground: {
    width: 24,
    height: 80, // max height
    backgroundColor: '#E8F5E9',
    borderRadius: 4,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    backgroundColor: '#1A3622',
    borderRadius: 4,
  },
  labelText: {
    fontSize: 10,
    color: '#2B4A34',
    marginTop: 4,
  }
});
