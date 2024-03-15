import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
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
    // Adicione a imagem para cada item
    image: require('../Assets/territorio2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Território 3',
    // Adicione a imagem para cada item
    image: require('../Assets/territorio3.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Território 4',
    // Adicione a imagem para cada item
    image: require('../Assets/territorio4.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Território 5',
    // Adicione a imagem para cada item
    image: require('../Assets/territorio5.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Território 6',
    // Adicione a imagem para cada item
    image: require('../Assets/territorio6.png'),
  },
];

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Conheça a Diversidade no ZooKids!</Text>
        </View>
        <FlatList
          data={TERRITORIO}
          renderItem={({ item }) => <Item image={item.image} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#bfd76d'
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    alignItems: 'center', // Alinhe a imagem e o título ao centro
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 400, // Defina a largura da imagem conforme necessário
    height: 200, // Defina a altura da imagem conforme necessário
    resizeMode: 'cover', // Ajuste a imagem para cobrir todo o espaço disponível
    borderRadius:20,
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'#F4CA44',
    textAlign:'center',
    marginBottom:15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
    textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra (horizontal, vertical)
    textShadowRadius: 5, // Raio da sombra
  },
  box:{
    borderRadius:100,
    padding:30,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#136FAB'
  }
});

export default App;
