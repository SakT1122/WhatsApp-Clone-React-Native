import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';

import React from 'react'
import countryData from '../../data/country.json'
import CountryPageItem from './CountryPageItem';

const CountryPage = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigation.goBack() }} />
        <Appbar.Content title="Select Country" />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>
      <ScrollView style={styles.root}>
        
        {countryData.map((item) => {
          return <CountryPageItem name={item.name} flag={item.flag} dial_code={item.dial_code} />
        })}
      </ScrollView>
    </View>

  )
}

export default CountryPage

const styles = StyleSheet.create({
  root: {  
    backgroundColor: "#fff",
  }
})