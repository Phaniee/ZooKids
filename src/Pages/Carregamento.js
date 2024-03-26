import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Carregamento() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => { //parte que controla o carregamento 
            setLoading(false);
            navigation.navigate('Welcome'); // Navega para a página "Welcome"
        }, 5000); // 5000 milissegundos = 5 segundos

        return () => clearTimeout(timer);
    }, []);

    return (
        <ImageBackground source={require('../../assets/splash.png')} style={styles.background}>
            {loading && (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
