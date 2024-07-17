import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Appbar } from 'react-native-paper';
import OTPTextInput from 'react-native-otp-textinput'


const OtpPage = ({ navigation }: { navigation: any }) => {
  let otpInput = useRef(null);

  return (

    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigation.navigate("welcome_page")}} />
        <Appbar.Content title="Enter OTP Code" />
      </Appbar.Header>
      <View style={styles.mainStyle}>
        <View style={styles.contentStyle}>
          <Text>Code has been sent to +91-93******42</Text>
          <OTPTextInput ref={(e: any) => (otpInput = e)} textInputStyle={styles.otpText} />
          <Text>Resend code in <Text style={styles.link}>56 </Text>s</Text>
        </View>
        <Pressable style={styles.btn} onPress={() => { navigation.navigate("home_page") }}>
          <Text style={styles.btnFont}>Verify</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default OtpPage

const styles = StyleSheet.create({
  root: {
    display: "flex",
    height: "93%",

  },
  mainStyle: {
    backgroundColor: "#fff",
    flex:1,
    alignItems: "center"
  },
  contentStyle: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:30
  },
  btn: {
    height: 38,
    width: 250,
    backgroundColor: '#000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  btnFont: {
    color: '#fff',
    fontSize: 13
  },
  link: {
    color: "#0C42CC",
    fontSize: 13,
    fontWeight: "400"
  },
  otpText:{
    borderRadius:10,
    borderWidth:4,
  }

})