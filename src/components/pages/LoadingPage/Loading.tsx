import { StyleSheet, Text, View } from 'react-native'
import {useEffect} from 'react'
import { useFonts } from 'expo-font';

import BackgroundImg from '../../../../assets/svg/loading_background.svg'
import LOGO from '../../../../assets/svg/logo_1.svg'
import TextLogo from '../../../baseui/TextLogo/TextLogo'

const loading = ({navigation}:{navigation:any}) => {

  const [loaded, error] = useFonts({
    'Roboto-Black': require('../../../../assets/fonts/Roboto/Roboto-Black.ttf'),
    "Roboto-Bold": require("../../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Thin": require("../../../../assets/fonts/Roboto/Roboto-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      navigation.navigate("welcome_page")
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    // <View style={styles.root}>
    //   <View style={styles.bg}>
    //     {/* <BackgroundImg/> */}
    //     <Text style={styles.text}>Whatsapp</Text>
    //   </View>
      
    // </View>

    


    <View style={styles.root}>
      <View style={styles.bg}>
      <BackgroundImg/>
      </View>
      <View style={styles.content}>
        <LOGO width="70" height="70"/>
      <Text style={styles.text}>Whatsapp</Text>
      </View>
      <View style={{position:"absolute", bottom:100, left:"43%"}}>
        <TextLogo/>
      </View>
    </View>
  )
}

export default loading

const styles = StyleSheet.create({
  root:{
    height:"100%",
    width:'100%',
    position:"relative",
  },
  bg:{
    width:"100%",
  },
  content:{
    position:"absolute",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height:"100%"
  },
  text:{
    marginTop:12,
    fontWeight:"500",
    fontSize:30
  }
})

