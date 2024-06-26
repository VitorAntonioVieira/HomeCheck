import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    weight: yup.number().positive().required("Informe seu peso"),
    height: yup.number().min(2, "No mínimo 2 dígitos").positive().required("Informe sua altura")
});

export default function IMC({ navigation }) {
    const [imc, SetImc] = useState();

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            weight: '',
            height: ''
        }
    })

    const calcIMC = (data) => {
        var calc = data.weight / (data.height * data.height)
        SetImc(calc);
    }

    return (
        <View style={styles.l_container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.goBack}>Voltar Home</Text>
            </TouchableOpacity>
            <View style={styles.form_box}>
                <Text>Calcule Seu IMC</Text>
                <Controller
                    control={control}
                    name="weight"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={[styles.formInput, { borderColor: errors.username ? 'red' : '#22A2F2' }]}
                            placeholder='Digite seu peso'
                            placeholderTextColor='gray'
                        />
                    )}
                />
                {errors.weight && <Text style={styles.error_label}>{errors.weight?.message}</Text>}
                <Controller
                    control={control}
                    name="height"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={[styles.formInput, { borderColor: errors.password ? 'red' : '#22A2F2' }]}
                            placeholder='Digite sua altura'
                            placeholderTextColor='gray'
                        />
                    )}
                />
                {errors.height && <Text style={styles.error_label}>{errors.height?.message}</Text>}
                <Pressable
                    style={styles.form_btn}
                    onPress={handleSubmit(calcIMC)}
                    accessibilityLabel='Login with this button'
                >
                    <Text style={styles.btn_label}>Calcular IMC</Text>
                </Pressable>
                {imc && (
                    <Text style={{fontSize: 18, fontWeight: '600'}}>Seu IMC é {imc.toFixed(2)}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    l_container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title_box: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#22A2F2',
    },
    form_box: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 250,
    },
    formInput: {
        width: 300,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#22A2F2',
        borderRadius: 5,
        padding: 10,
    },
    form_btn: {
        height: 50,
        width: 300,
        backgroundColor: '#22A2F2',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_label: {
        fontWeight: 'bold',
        color: '#fff',
    },
    error_label: {
        color: 'red',
        fontSize: 12
    },
    goBack: {
        color: '#22A2F2',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 20
    },
});