import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import simpleLogo from '../../assets/logo1.png'

const MobHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={simpleLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 118,
    backgroundColor: '#E4B062',
    paddingHorizontal: 15,
    paddingVertical: 28,
  },

})

export default MobHeader