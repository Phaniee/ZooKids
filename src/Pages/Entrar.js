import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert,Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Entrar() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    const dadosLoginUser = {
      'emailUser': email,
      'senhaUser': senha,
    };
    try {
      // Fazer uma requisição para a API para verificar as credenciais
      const response = await axios.post('http://localhost/bdzookids/userLogin',dadosLoginUser, {
       
      });

      // Verificar o resultado retornado pela API
      if (response.data && response.data.success) {
        console.log('Login bem-sucedido');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixaLogo}>
        <Pressable onPress={() => navigation.navigate('Welcome')} >
          <Image
            style={styles.logo}
            source={require('../Assets/logo.png')}
          />
        </Pressable>
        </View>
      <View>
        <Text style={styles.titulo}>Faça seu login!</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Email:</Text>
          <TextInput
            placeholder="Digite um email..."
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Senha:</Text>
          <TextInput
            placeholder="Digite sua senha..."
            style={styles.input}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText}>Não tem conta? Cadastre-se!</Text>
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B813F',
  },
  caixaLogo:{
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    width:400,
    height:250,
  },
  titulo:{
    fontSize:50,
    fontWeight:'bold',
    color:'#F4CA44',
    marginBottom:15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
    textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra (horizontal, vertical)
    textShadowRadius: 5, // Raio da sombra
  },
  form:{
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#A0DF38',
    width: '80%',
    padding: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontSize: 20,
    width: '30%',
    fontWeight:'bold'
  },
  input: {
    borderBottomWidth: 1,
    marginStart:15,
    height: 40,
    fontSize: 16,
    flex: 1,
  },
  box: {
    width: '80%',
    padding: 20,
  },
  button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 50,
  marginTop:7,
  marginBottom:5,
  elevation: 3,
  backgroundColor: '#F4CA44',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
