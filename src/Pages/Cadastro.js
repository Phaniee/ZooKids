import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaCoincide, setSenhaCoincide] = useState(true);

  const carregar = async () => {
    if (senha !== confirmarSenha) {
      setSenhaCoincide(false);
      return;
    }

    const dadosUser = {
      'nomeUser': nome,
      'emailUser': email,
      'senhaUser': senha,
    };

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    try {
      const response = await axios.post('http://localhost/bdzookids/userInsert', dadosUser, axiosConfig);
      console.log(response.data)
      // Navegar para a tela de login após o cadastro bem-sucedido
      navigation.navigate('Entrar');
    } catch (error) {
      console.error('Erro ao criar usuário', error);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.caixaLogo}>
        <Pressable onPress={() => navigation.navigate('Welcome')} >
        </Pressable>
      </View>

      <View style={styles.head}>
        <Text style={styles.titulo}>Cadastro</Text>
        <Text style={styles.texto1}>Faça cadastro no Zoo e usufrua de todas as funcionalidades do app.</Text>
      </View>
      <View style={styles.conteudo}>
        <TextInput
          placeholder='Insira o seu nome'
          style={styles.input}
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          placeholder='Insira o seu e-mail'
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder='Insira a sua senha'
          style={styles.input}
          onChangeText={setSenha}
          secureTextEntry={true}
          value={senha}
        />
        <TextInput
          placeholder='Confirme a sua senha'
          style={styles.input}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
          value={confirmarSenha}
        />
        {!senhaCoincide && <Text style={styles.errorText}>As senhas não coincidem.</Text>}
        <View style={styles.box}>
        <Pressable style={styles.button} onPress={carregar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B813F',
  },
  caixaLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
  head: {
    paddingTop: 50,
    paddingLeft: 20,
    justifyContent: 'space-evenly',
  },
  input: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: 'white',
    margin: 20,
    height: 40,
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  conteudo:{
    paddingBottom: 100,
  },
  box: {
    width: '80%',
    paddingTop: 30,
    paddingLeft: 85,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginTop: 7,
    marginBottom: 5,
    elevation: 3,
    backgroundColor: '#F4CA44',
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight:'bold'
  },
    errorText: {
      color: 'red',
      marginTop: 5,
    },
    titulo: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#F4CA44',
      textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
      textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra (horizontal, vertical)
      textShadowRadius: 5, // Raio da sombra
    },
    titulo2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#005022',
      marginBottom: 5,
      marginTop: 10,
    },
    texto1: {
      fontSize: 16,
      color: 'white',
      textAlign: 'left',
      paddingBottom: 20,

    },
  });
