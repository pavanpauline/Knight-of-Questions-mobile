import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { InputWithLabel } from './InputWithLabel';
import { useRouter } from 'expo-router';

export function CadastroForm() {
  const router = useRouter();

  const handleCadastro = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text variant="title" style={styles.title}>Crie uma nova conta!</Text>
      
      <InputWithLabel 
        label="Nome" 
        placeholder="Digite o seu nome" 
      />
      
      <InputWithLabel 
        label="Usuário" 
        placeholder="Digite o seu usuário" 
      />
      
      <InputWithLabel 
        label="E-mail" 
        placeholder="Digite o seu e-mail" 
        keyboardType="email-address"
      />
      
      <InputWithLabel 
        label="Senha" 
        placeholder="Digite a sua senha" 
        secureTextEntry 
      />
      
      <InputWithLabel 
        label="Repita a senha" 
        placeholder="Digite a sua senha" 
        secureTextEntry 
      />
      
      <Button title="CRIAR CONTA" onPress={handleCadastro} style={styles.button} />
      
      <TouchableOpacity onPress={() => router.push('/(auth)/login')} style={styles.linkButton}>
        <Text variant="body" style={styles.linkText}>Já tem conta? Entrar</Text>
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
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  linkText: {
    color: '#333',
    textDecorationLine: 'underline',
  }
});
