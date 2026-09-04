import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { InputWithLabel } from './InputWithLabel';
import { useRouter } from 'expo-router';

export function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text variant="title" style={styles.title}>Inicie sua sessão de estudos!</Text>
      
      <InputWithLabel 
        label="Usuário" 
        placeholder="Digite o seu usuário" 
      />
      
      <InputWithLabel 
        label="Senha" 
        placeholder="Digite a sua senha" 
        secureTextEntry 
      />
      
      <Button title="LOGIN" onPress={handleLogin} style={styles.button} />
      
      <TouchableOpacity onPress={() => router.push('/(auth)/cadastro')} style={styles.linkButton}>
        <Text variant="body" style={styles.linkText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.linkButton}>
        <Text variant="caption" style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'left',
    color: '#000',
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  linkButton: {
    alignItems: 'center',
    marginVertical: 8,
  },
  linkText: {
    color: '#333',
    borderWidth: 1,
    borderColor: '#CCC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '100%',
    textAlign: 'center',
  },
  forgotText: {
    textDecorationLine: 'underline',
    marginTop: 16,
  }
});
