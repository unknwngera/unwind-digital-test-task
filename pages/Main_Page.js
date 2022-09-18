import React from 'react';
import MobHeader from "../mobComponents/mobMainPage/MobHeader";
import MobMain from "../mobComponents/mobMainPage/MobMain";
import PadHeader from "../padComponents/padMainPage/PadHeader"
import PadMain from "../padComponents/padMainPage/PadMain"
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';


export default function Main_Page() {
    return (
        <View>
            {(Platform.isPad) ?
                (
                    <View style={styles.main}>
                        <PadHeader />
                        <PadMain />
                    </View>
                )
                :
                (
                    <View style={styles.main}>
                        <MobHeader />
                        <MobMain />
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,

    }
})