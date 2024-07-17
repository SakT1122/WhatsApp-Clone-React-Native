import {Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeArt from '../../../../assets/svg/welcome_page_art.svg'
import TextLogo from '../../../baseui/TextLogo/TextLogo'

const WelcomePage = ({navigation}:{navigation:any}) => {
    return (
        <View style={styles.root}>
            <View style={styles.vone}>

            <Text style={styles.title}>Welcome to WhatsApp</Text>
            <WelcomeArt />
            <Text style={styles.desc}>Read our <Text style={styles.link}>Privacy Policy</Text> Tap "Agree and Continue" to accept the <Text style={styles.link}>terms of Service</Text></Text>
            <Pressable style={styles.btn} onPress={()=>{navigation.navigate("login_page")}}>
                <Text style={styles.btnFont}>AGREE AND CONTINUE</Text>
            </Pressable>

            </View>

            <View style={styles.vtwo}>
            <TextLogo/>
            </View>

        </View>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        paddingTop:100,
        paddingBottom:100
    },
    vone:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:40,
        paddingHorizontal:40
    },
    vtwo:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: "500",
        fontFamily:"Roboto-Bold"
    },
    desc: {
        color: '#000',
        fontSize: 13,
        fontWeight: "400",
        textAlign:"center"
    },
    link: {
        color: "#0C42CC",
        fontSize: 13,
        fontWeight: "400"
    },
    btn:{
        height:38,
        width:250,
        backgroundColor:'#00A884',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:4
    },
    btnFont:{
        color:'#000',
        fontSize:13
    }
})