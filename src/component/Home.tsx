import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/2.png')}
                style={styles.image}
            />
            <Text style={styles.varietiesText}>Varietas Tanaman</Text>
            <Text style={styles.subText}>yang Beragam</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#65B741',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    varietiesText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    subText: {
        fontSize: 20,
        color: 'white',
    },
    button: {
        backgroundColor: '#F3B664',
        borderRadius: 8,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;
