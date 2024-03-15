import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  const openPrivacyPolicy = () => {
    // Coloque aqui o URL da sua política de privacidade
    const privacyPolicyUrl = 'https://exemplo.com/politica-de-privacidade';
    Linking.openURL(privacyPolicyUrl);
  };

  const openCookies = () => {
    // Coloque aqui o URL da sua política de cookies
    const cookiesUrl = 'https://exemplo.com/politica-de-privacidade';
    Linking.openURL(cookiesUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={require('../../src/Assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.containerTermo}>
        <Text style={styles.termo}>
          Ao clicar em Criar Conta ou Entrar, você concorda com os nossos Termos. Saiba como processamos
          os seus dados em nossa
          <Pressable onPress={openPrivacyPolicy}>
            <Text style={styles.linkText}> Política de Privacidade</Text>
          </Pressable>
          {' '}e <Pressable onPress={openCookies}>
            <Text style={styles.linkText}>Política de Cookies</Text>
            </Pressable>{' '}.
        </Text>
      </View>

      <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Criar uma conta</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Entrar')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B813F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    flex: 2,
    justifyContent: 'center',
  },
  containerTermo: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  termo: {
    textAlign: 'justify',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#F4CA44',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 400,
    height: 250,
  },
  containerButton: {
    flex: 1,
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
    fontWeight: 'bold',
  },
 
});
