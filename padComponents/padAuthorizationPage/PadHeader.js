import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import simpleLogo from '../../assets/logo1.png'
import complexLogo from '../../assets/logo2.png'

const PadHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={complexLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 118,
    backgroundColor: '#E4B062',
    paddingHorizontal: 37,
    paddingVertical: 28,
  },

})

export default PadHeader