import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TextLogo() {
  return (
    <View style={styles.root}>
      <Text style={styles.style1}>from</Text>
      <Text style={styles.style2}>META</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
    root:{
        display:"flex",
        alignItems:"center"
    },
    style1:{
        color:'#867373',
        fontSize:12,
        fontWeight:"400"
    },
    style2:{
        color:'#000',
        fontSize:15,
        fontWeight:"400",
        letterSpacing:2
    }
})