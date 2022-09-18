import React from 'react';
import MobHeader from "../mobComponents/mobAuthorizationPage/MobHeader";
import MobMain from "../mobComponents/mobAuthorizationPage/MobMain";
import PadHeader from "../padComponents/padAuthorizationPage/PadHeader"
import PadMain from "../padComponents/padAuthorizationPage/PadMain"
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';


export default function AuthorizationPage() {
    return (
        <View style={styles.main}>
            {(Platform.isPad) ?
                (
                    <View style={styles.main}>
                        <PadHeader />
                        <PadMain />
                    </View>
                )
                :
                (
                    <View>
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
        height: '100%'
    }
})

