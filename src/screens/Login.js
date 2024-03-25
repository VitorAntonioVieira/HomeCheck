import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required("Informe seu username"),
    password: yup.string().min(5, "A senha deve ter no mínimo 5 dígitos").required("Informe sua senha")
})

export default function Login({ navigation }) {

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const handleSignIn = async (data) => {
        if (data.username === 'admin' && data.password === '12345') {
            Alert.alert('Login bem sucedido.');
            navigation.navigate('Home');
            setValue('username', '');
            setValue('password', '');
          } else {
            Alert.alert('Login falhou. Verifique suas credenciais.');
            setValue('username', '');
            setValue('password', '');
          }
    };

    return (
        <View style={styles.l_container}>
            <View style={styles.title_box}>
                <Text style={styles.title}>SENAI</Text>
            </View>
            <View style={styles.form_box}>
                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={[styles.formInput, {borderColor: errors.username ? 'red': '#22A2F2'}]}
                            placeholder='Username'
                            placeholderTextColor='gray'
                        />
                    )}
                />
                {errors.username && <Text style={styles.error_label}>{errors.username?.message}</Text>}
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={[styles.formInput, {borderColor: errors.password ? 'red': '#22A2F2'}]}
                            placeholder='Senha'
                            placeholderTextColor='gray'
                            secureTextEntry={true}
                        />
                    )}
                />
                {errors.password && <Text style={styles.error_label}>{errors.password?.message}</Text>}
                <Pressable
                    style={styles.form_btn}
                    onPress={handleSubmit(handleSignIn)}
                    accessibilityLabel='Login with this button'
                >
                    <Text style={styles.btn_label}>LOGIN</Text>
                </Pressable>
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
    }
})