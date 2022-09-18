import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './Navigate';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const fonts = () => Font.loadAsync({
  'Inter': require('./assets/fonts/Inter-ExtraBold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <SafeAreaView style={styles.container}>
        <MainStack />
      </SafeAreaView>
    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
