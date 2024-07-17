import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { Tabs, TabsProvider, TabScreen, useTabNavigation,useTabIndex } from 'react-native-paper-tabs';


const test = () => {
  return (
    <View>
      <Appbar.Header style={{backgroundColor:"plum"}}>
        <Appbar.BackAction onPress={() => { }} style={{width:0}}/>
        <Appbar.Content title="WhatsApp" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} iconColor="#fff"/>
      </Appbar.Header>
      <TabsProvider defaultIndex={0}>
        <Tabs>
        <TabScreen icon="camera" label="">   
           <ExploreWitHookExamples />
        </TabScreen>
        </Tabs>
      </TabsProvider>
      <Text>test</Text>
    </View>
  )
}

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 }}>
      {/* <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button> */}
    </View>
  );
}


export default test

const styles = StyleSheet.create({})