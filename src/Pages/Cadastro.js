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
      const response = await axios.post('http://localhost/bdetec/userInsert', dadosUser, axiosConfig);
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao criar usuário', error);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.caixaLogo}>
        <Pressable onPress={() => navigation.navigate('Welcome')} >
          <Image
            style={styles.logo}
            source={require('../Assets/logo.png')}
          />
        </Pressable>
      </View>

      <View style={styles.head}>
        <Text style={styles.titulo}>Cadastro</Text>
        <Text style={styles.texto1}>Faça cadastro no Zoo e usufrua de todas as funcionalidades do app.</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.titulo2}>Qual é o seu nome?</Text>
        <TextInput
          placeholder='Insira o seu nome'
          style={styles.input}
          onChangeText={setNome}
          value={nome}
        />
        <Text style={styles.titulo2}>Qual é o seu e-mail?</Text>
        <TextInput
          placeholder='Insira o seu e-mail'
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.titulo2}>Digite a sua senha</Text>
        <TextInput
          placeholder='Insira a sua senha'
          style={styles.input}
          onChangeText={setSenha}
          secureTextEntry={true}
          value={senha}
        />
        <Text style={styles.titulo2}>Confirme a sua senha</Text>
        <TextInput
          placeholder='Confirme a sua senha'
          style={styles.input}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
          value={confirmarSenha}
        />
        {!senhaCoincide && <Text style={styles.errorText}>As senhas não coincidem.</Text>}
        <Pressable style={styles.button} onPress={carregar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
  head: {
    margin: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  conteudo: {
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#A0DF38',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  input: {
    backgroundColor: '#FFF',
    marginTop: 13,
    width: 250,
    height: 35,
    borderRadius: 5,
    padding: 5,
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
    textAlign: 'center'
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
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 20,
    },
  });
