import React from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const PadPostItem = (props) => {
    return (
        <View style={styles.post}>
            <Image
                style={{ height: 150, width: 150, marginBottom: 22 }}
                source={{ uri: props.imageSrc }} />
            <Text style={styles.name}>
                Author: {props.name}
            </Text>
            <Text style={styles.name}>
                Company: {props.company}
            </Text>
            <Text style={styles.title}>
                Title: {props.title}
            </Text>
            <Text numberOfLines={5} ellipsizeMode="tail" style={styles.body}>
                {props.body}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        marginTop: (0.02 * screenHeight),
        justifyContent: 'space-between',
        height: (0.4 * screenHeight),
        width: (0.43 * screenWidth),
        borderColor: '#27569C',
        borderWidth: 5,
        borderRadius: 6,
        padding: 25,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 4 },
        // shadowRadius: 4,
        // shadowOpacity: 0.75,
    },
    name: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,


    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,

    },
    body: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,
    }
})

export default PadPostItem