import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Produk = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search" style={styles.searchInput} />
                <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
            </View>
            <View style={styles.produkCard}>
                <Image
                    source={require('../img/3.png')}
                    style={styles.produkImage}
                />
                <View style={styles.produkInfo}>
                    <Text style={styles.produkName}>Nama Barang</Text>
                    <Text style={styles.produkHarga}>Harga</Text>
                </View>
            </View>
            <ScrollView horizontal>
                <View style={styles.additionalView}>
                    <Image
                        source={require('../img/4.png')}
                        style={styles.additionalImage}
                    />
                </View>
                <View style={styles.additionalView}>
                    <Image
                        source={require('../img/4.png')}
                        style={styles.additionalImage}
                    />
                </View>
            </ScrollView>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAEEDE',
        borderRadius: 8,
        padding: 5,
        marginVertical: 10,
    },
    searchIcon: {
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 8,
        height: 55,
        width: 343,
    },
    produkCard: {
        width: 333,
        height: 388,
        backgroundColor: '#FAEEDE',
        borderRadius: 8,
        marginVertical: 10,
        padding: 10,
        borderRadius: 20,
        marginBottom: 50,
        marginTop: 50,
    },
    produkImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    produkInfo: {
        marginTop: 10,
    },
    produkName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    produkHarga: {
        fontSize: 16,
        color: '#65B741',
    },
    additionalView: {
        width: 165,
        height: 130,
        backgroundColor: '#FAEEDE',
        marginHorizontal: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    additionalImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
});

export default Produk;
