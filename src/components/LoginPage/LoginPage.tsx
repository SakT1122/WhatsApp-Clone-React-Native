import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Dropdown from '../../../assets/svg/dropdown.svg'

const LoginPage = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.content}>
                <Text style={styles.title}>Enter your phone number</Text>
                <Text style={styles.desc}>WhatsApp will need to verify your phone number<Text style={styles.link}> What's my number?</Text>{" "}</Text>
                <Pressable onPress={()=>{navigation.navigate("country_page")}}  style={styles.countryBtn}>
                        <Text style={{alignItems:"flex-start"}}>India</Text>
                        <Dropdown style={{paddingLeft:100, alignContent:"flex-end"}}/>
                </Pressable>
                <View style={styles.input}>
                    <View style={styles.countryBtn}>
                        <Text>+91</Text>
                    </View>
                    <TextInput style={styles.txtInput}/>
                </View>  
            </View>
            <Pressable style={styles.btn} onPress={() => { navigation.navigate("otp_page") }}>
                <Text style={styles.btnFont}>NEXT</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width:"100%"
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: "500"
    },
    content: {
        display: "flex",
        paddingHorizontal: 50,
        gap: 30,
        paddingTop:40
    },
    desc: {
        color: '#000',
        fontSize: 13,
        fontWeight: "400",
        textAlign: "center",
        paddingVertical:18
    },
    link: {
        color: "#0C42CC",
        fontSize: 13,
        fontWeight: "400"
    },
    btn: {
        height: 38,
        width: 150,
        backgroundColor: '#00A884',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginTop: 10,
        marginBottom: 150,
    },
    btnFont: {
        color: '#000',
        fontSize: 13
    },
    input: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center", gap:15
    },
    countryBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        borderBottomWidth: 0.5,
        borderBlockColor: "#00A884"
    },
    countryTxt: {
        fontSize: 14,
        fontWeight: "400"
    },
    txtInput:{
        flex:1,
        borderBottomWidth: 0.5,
        borderBottomColor:"#00A884",
        borderBlockColor: "#00A884",
        paddingHorizontal: 10,
        letterSpacing: 1.2,
    }
})