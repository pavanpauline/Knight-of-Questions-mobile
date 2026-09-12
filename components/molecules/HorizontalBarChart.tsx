import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DataPoint {
  label: string;
  value: number;
  displayValue?: string; // Optional if we want to show value on the right
}

interface Props {
  data: DataPoint[];
  maxValue: number;
  showValueInline?: boolean; // Show value at the end of the bar
}

export function HorizontalBarChart({ data, maxValue, showValueInline = false }: Props) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const widthPercentage = Math.min((item.value / maxValue) * 100, 100);
        return (
          <View key={index} style={styles.row}>
            <Text style={styles.labelText} numberOfLines={1}>{item.label}</Text>
            <View style={styles.barBackground}>
              <View style={[styles.barFill, { width: `${widthPercentage}%` }]} />
              {showValueInline && (
                <Text style={styles.inlineValueText}>{item.displayValue}</Text>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  labelText: {
    width: 80,
    fontSize: 10,
    color: '#1A3622',
    textAlign: 'right',
    paddingRight: 8,
  },
  barBackground: {
    flex: 1,
    height: 16,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#1A3622',
    borderRadius: 8,
  },
  inlineValueText: {
    position: 'absolute',
    right: 8,
    fontSize: 10,
    color: '#1A3622', // if outside bar
    fontWeight: 'bold',
  }
});
