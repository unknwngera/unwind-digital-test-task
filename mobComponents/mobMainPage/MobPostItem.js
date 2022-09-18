import React from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const MobPostItem = (props) => {
    return (
        <View style={styles.post}>
            <Text style={styles.text}>
                Author: {props.name}
            </Text>
            <Text style={styles.text}>
                Company: {props.company}
            </Text>
            <Text style={styles.title}>
                Title: {props.title}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        marginTop: (0.02 * screenHeight),
        height: (0.35 * screenHeight),
        width: (0.9 * screenWidth),
        borderColor: '#27569C',
        borderWidth: 5,
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 17,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 4 },
        // shadowRadius: 4,
        // shadowOpacity: 0.75,
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,
        height: 30,
        marginBottom: 17,


    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,
        height: 140,

    }
})

export default MobPostItem