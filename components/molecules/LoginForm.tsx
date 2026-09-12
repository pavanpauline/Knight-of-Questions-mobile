import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import { useRouter } from 'expo-router';

export function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>⚔️ INICIAR SESSÃO</Text>
      <Text style={styles.subtitle}>Entre na arena do conhecimento</Text>

      {/* Fields */}
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>USUÁRIO</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário..."
          placeholderTextColor="#6A9E7A"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          placeholderTextColor="#6A9E7A"
          secureTextEntry
        />
      </View>

      {/* Login button */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.85}>
        <Text style={styles.loginBtnText}>ENTRAR  →</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Register link */}
      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => router.push('/(auth)/cadastro')}
        activeOpacity={0.8}
      >
        <Text style={styles.secondaryBtnText}>Criar nova conta</Text>
      </TouchableOpacity>

      {/* Forgot */}
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
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
    marginBottom: 20,
  },
  fieldGroup: {
    marginBottom: 12,
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
    paddingVertical: 12,
    fontSize: 14,
    color: '#E8F5E9',
    fontFamily: 'monospace',
  },
  loginBtn: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  loginBtnText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A3622',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A5E45',
  },
  dividerText: {
    fontSize: 11,
    color: '#6A9E7A',
    fontFamily: 'monospace',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#5A8C6A',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#A8CBB8',
    fontFamily: 'monospace',
  },
  forgotBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  forgotText: {
    fontSize: 11,
    color: '#6A9E7A',
    fontFamily: 'monospace',
    textDecorationLine: 'underline',
  },
});
