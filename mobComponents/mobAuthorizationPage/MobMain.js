import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const MobMain = () => {

    const navigation = useNavigation();

    const User =
    {
        login: 'Unwind',
        password: 'Digital'
    };
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const onChangeLogin = (value) => {
        setLogin(value)
    };
    const onChangePassword = (value) => {
        setPassword(value)
    };
    const throwError = (error) => {
        setErrorText(error)
    }
    const successfully = () => {
        throwError('');
        navigation.navigate('Main_Page');
    }
    const validation = () => {
        (login === User.login) && (password === User.password) ? successfully() : throwError('Wrong login or password')
    };


    return (
        <View style={styles.main}>
            <View style={styles.authForm}>
                <Text style={styles.title}>
                    Authorization
                </Text>
                <Text style={styles.login}>
                    login
                </Text>
                <TextInput
                    style={styles.input}
                    autoComplete='off'
                    onChangeText={onChangeLogin}
                />
                <Text style={styles.password}>
                    password
                </Text>
                <TextInput
                    style={styles.input}
                    autoComplete='off'
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                />
                <Pressable onPress={validation}>
                    <View style={styles.submit}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 24,
                            lineHeight: 43,
                            fontWeight: '800',
                            textAlign: 'center',
                        }}>
                            Submit
                        </Text>
                    </View>
                </Pressable>
                <View style={styles.errorMsg}>
                    <Text style={{
                        color: 'red',
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        fontSize: 14,
                        lineHeight: 32
                    }}>
                        {errorText}
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        paddingVertical: (0.2 * screenHeight),
        paddingHorizontal: (0.05 * screenWidth),

    },
    authForm: {
        width: (0.9 * screenWidth),
        height: 333,
        borderColor: '#27569C',
        borderWidth: 5,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
    },
    title: {
        width: 212,
        height: 45,
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 45,
        color: '#27569C',
        textAlign: 'center'
    },
    login: {
        width: 212,
        height: 39,
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 39,
    },
    password: {
        width: 212,
        height: 39,
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 39,
    },
    input: {
        width: 212,
        height: 39,
        borderWidth: 4,
        borderColor: '#27569C',
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: '#D9D9D9'
    },
    submit: {
        marginTop: 15,
        width: 213,
        height: 43,
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: '#E4B062',
    },
    errorMsg: {
        height: 32
    }
})

export default MobMain