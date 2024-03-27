import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
  Modal,
} from 'react-native';

const TERRITORIO = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Território 1',
    image: require('../Assets/territorio1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Território 2',
    image: require('../Assets/territorio2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Território 3',
    image: require('../Assets/territorio3.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Território 4',
    image: require('../Assets/territorio4.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d42',
    title: 'Território 5',
    image: require('../Assets/territorio5.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29772',
    title: 'Território 6',
    image: require('../Assets/territorio6.png'),
  },
];

const Item = ({ title, image }) => (
  <Pressable style={styles.item} onPress={() => console.log(title)}>
    <Image style={styles.image} source={image} resizeMode="cover" />
  </Pressable>
);

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    //lógica para limpar os dados locais e fazer o logout
    AsyncStorage.clear();
    console.log('Logout realizado');
    navigation.navigate('Entrar');
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.titulo}>Conheça a Diversidade no ZooKids!</Text>
      </View>
      <FlatList
        data={TERRITORIO}
        renderItem={({ item }) => <Item image={item.image} title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.menu}>
        <Pressable style={styles.menuButton} onPress={() => console.log('Perfil')}>
          <Text style={styles.menuButtonText}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.menuButtonText}>Sair</Text>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <Pressable onPress={() => setModalVisible(false)} style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Tem certeza que deseja sair?</Text>
            <View style={styles.modalButtons}>
              <Pressable onPress={() => setModalVisible(false)} style={styles.button}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </Pressable>
              <Pressable onPress={handleLogout} style={[styles.button, styles.buttonLogout]}>
                <Text style={[styles.buttonText, styles.buttonLogoutText]}>Sair</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#bfd76d',
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F4CA44',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  box: {
    borderRadius: 100,
    padding: 30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#136FAB',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#136FAB',
  },
  menuButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#F4CA44',
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
  },
  buttonText: {
    fontSize: 18,
  },
  buttonLogout: {
    backgroundColor: 'red', // cor de fundo para o botão de logout
  },
  buttonLogoutText: {
    color: 'white', // cor do texto para o botão de logout
  },
});

export default App;
