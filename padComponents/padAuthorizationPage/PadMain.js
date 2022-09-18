import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const PadMain = () => {

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
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.login}>
                        login
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoComplete="off"
                        onChangeText={onChangeLogin}
                    />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.password}>
                        password
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoComplete='off'
                        secureTextEntry={true}
                        onChangeText={onChangePassword}
                    />
                </View>
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
            </View>
            <View style={{ height: 25 }}>
                <Text style={{
                    color: 'red',
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 25
                }}>
                    {errorText}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingVertical: (0.35 * screenHeight),
    },
    authForm: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        width: (0.65 * screenWidth),
        height: (0.3 * screenHeight),
        borderColor: '#27569C',
        borderWidth: 5,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        height: 70,
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 70,
        color: '#27569C',
        textAlign: 'center'
    },
    login: {
        height: 45,
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 45,
    },
    password: {
        height: 45,
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 45,
    },
    input: {
        width: 295,
        height: 45,
        borderWidth: 4,
        borderColor: '#27569C',
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: '#D9D9D9'
    },
    submit: {
        width: 213,
        height: 43,
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: '#E4B062',
    },

})

export default PadMain