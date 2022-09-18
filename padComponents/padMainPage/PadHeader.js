import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import complexLogo from '../../assets/logo2.png'
import exit from '../../assets/exit.png'

const PadHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <Image source={complexLogo} />
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={exit} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 118,
        backgroundColor: '#E4B062',
        paddingHorizontal: 37,
        paddingVertical: 28,
    },

})

export default PadHeader