import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { LoginForm } from '../../components/molecules/LoginForm';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ImageBackground 
            source={require('../../assets/images/background.png')} 
            style={styles.imagePlaceholder}
            resizeMode="cover"
          >
            <View style={styles.card}>
              <LoginForm />
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#73B8A2', 
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: '#4A90E2', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
