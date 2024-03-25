import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Home</Text>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Lâmpada")}
            >
                <Text style={styles.label}>Lâmpada</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("MMC")}
            >
                <Text style={styles.label}>MMC</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.label}>Sair</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#22A2F2',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    label: {
        color: 'white',
        fontSize: 20
    }
});