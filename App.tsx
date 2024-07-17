import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from './src/components/pages/LoadingPage/Loading';
import WelcomePage from './src/components/pages/WelcomePage/WelcomePage';
import OtpPage from './src/components/OtpPage/OtpPage';
import LoginPage from './src/components/LoginPage/LoginPage';
import CountryPage from './src/components/LoginPage/CountryPage';
import HomePage from './src/components/HomePage/HomePage';
import test from './src/test/test';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loading_page'>
        <Stack.Screen name="loading_page" component={Loading}/>
        <Stack.Screen name="welcome_page" component={WelcomePage} options={{headerShown:false}}/>
        <Stack.Screen name="otp_page" component={OtpPage} options={{headerShown:false}}/>
        <Stack.Screen name="login_page" component={LoginPage} options={{headerShown:false}}/>
        <Stack.Screen name="country_page" component={CountryPage} options={{headerShown:false}}/>
        <Stack.Screen name="home_page" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="test_page" component={test} options={{headerShown:false}}/>


      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}


