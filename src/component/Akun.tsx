import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Akun = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Varietas Tanaman yang Beragam</Text>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../img/2.png')}
                    style={styles.image}
                />
                <Text style={styles.varietasText}>Varietas Tanaman</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
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
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    imageContainer: {
        width: 430,
        height: 521,
        backgroundColor: '#FAEEDE',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    varietasText: {
        color: '#65B741',
        fontSize: 40,
        marginTop: 10,
    },
    buttonContainer: {
        backgroundColor: '#F3B664',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Akun;
