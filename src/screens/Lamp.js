import React, { useState } from 'react';
import { View, Switch, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function Lamp({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const changeBack = () => {
    }

    return (
        <View style={[styles.container, {
            backgroundColor: isEnabled ? 'white' : '#010101'
        }]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.goBack}>Voltar Home</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: isEnabled ? '#010101' : 'white'}}>Acenda a Luz</Text>
            <Switch
                trackColor={isEnabled ? '#767577' : '#81b0ff'}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Image
                style={styles.lamp}
                source={isEnabled ? { uri: 'https://cdn-icons-png.flaticon.com/512/702/702797.png' } : { uri: 'https://cdn-icons-png.flaticon.com/512/702/702814.png' }}
                resizeMode='contain'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goBack: {
        color: '#22A2F2',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 20
    },
    lamp: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
});