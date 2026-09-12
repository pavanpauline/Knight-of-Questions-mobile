import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import { useRouter } from 'expo-router';

export function CadastroForm() {
  const router = useRouter();

  const handleCadastro = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>🛡️ CRIAR CONTA</Text>
      <Text style={styles.subtitle}>Junte-se à ordem dos cavaleiros</Text>

      {/* Fields */}
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome de cavaleiro..."
          placeholderTextColor="#6A9E7A"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>USUÁRIO</Text>
        <TextInput
          style={styles.input}
          placeholder="Escolha um usuário..."
          placeholderTextColor="#6A9E7A"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail..."
          placeholderTextColor="#6A9E7A"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha forte..."
          placeholderTextColor="#6A9E7A"
          secureTextEntry
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>CONFIRMAR SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Repita a senha..."
          placeholderTextColor="#6A9E7A"
          secureTextEntry
        />
      </View>

      {/* Register button */}
      <TouchableOpacity style={styles.registerBtn} onPress={handleCadastro} activeOpacity={0.85}>
        <Text style={styles.registerBtnText}>CRIAR CONTA  →</Text>
      </TouchableOpacity>

      {/* Back to login */}
      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => router.push('/(auth)/login')}
        activeOpacity={0.8}
      >
        <Text style={styles.secondaryBtnText}>← Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#A8CBB8',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 16,
  },
  fieldGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFD700',
    fontFamily: 'monospace',
    marginBottom: 6,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#1A3622',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#3A5E45',
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: '#E8F5E9',
    fontFamily: 'monospace',
  },
  registerBtn: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  registerBtnText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A3622',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#5A8C6A',
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
});
