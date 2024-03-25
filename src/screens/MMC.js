import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    weight: yup.number().positive().required("Informe seu peso"),
    height: yup.number().min(2, "No mínimo 2 dígitos").positive().required("Informe sua altura")
});

export default function MMC({navigation}) {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            weight: '',
            height: ''
        }
    })

    const calcIMC = (data) => {
        var imc = data.weight / (data.height*data.height)
        return(imc);
    }

    return (
        <View style={styles.container}>
           <View style={styles.form_box}>
                <Controller
                    control={control}
                    name="weight"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={[styles.formInput, {borderColor: errors.username ? 'red': '#22A2F2'}]}
                            placeholder='Digite seu peso'
                            placeholderTextColor='gray'
                        />
                    )}
                />
                {errors.username && <Text style={styles.error_label}>{errors.weight?.message}</Text>}
                <Controller
                    control={control}
                    name="height"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={[styles.formInput, {borderColor: errors.password ? 'red': '#22A2F2'}]}
                            placeholder='Digite sua altura'
                            placeholderTextColor='gray'
                            secureTextEntry={true}
                        />
                    )}
                />
                {errors.password && <Text style={styles.error_label}>{errors.height?.message}</Text>}
                <Pressable
                    style={styles.form_btn}
                    onPress={handleSubmit(calcIMC)}
                    accessibilityLabel='Login with this button'
                >
                    <Text style={styles.btn_label}>Calcular IMC</Text>
                </Pressable>
                <Text>Seu IMC é {imc}</Text>
            </View>
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
        color: '#22A2F2'
    },
    btn: {
        height: 50,
        width: 300,
        backgroundColor: '#22A2F2',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    label:{
        color: 'white',
        fontSize: 20
    }
});