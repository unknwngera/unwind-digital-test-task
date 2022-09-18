import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import simpleLogo from '../../assets/logo1.png'
import exit from '../../assets/exit.png'

const MobHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <Image source={simpleLogo} />
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
        paddingHorizontal: 15,
        paddingVertical: 28,
    },

})

export default MobHeader