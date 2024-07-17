import { View, Text, ScrollView } from "react-native";
import {
  Tabs,
  TabScreen,
  TabsProvider,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { Appbar } from "react-native-paper";
import CardItem from "./ChatItem";
const cardItems = [
  { name: "Sakshi", lastText: "Hey there tell", time: "5:27 PM" },
  { name: "Dhanashree", lastText: "Not doing anything", time: "Yesterday" },
  { name: "Shivaji", lastText: "Hey there", time: "Yesterday" },
  { name: "PK", lastText: "Not doing anything", time: "Yesterday" },
  { name: "Sampada", lastText: "Not doing anything", time: "Yesterday" },
  { name: "User", lastText: "Here we go", time: "Yesterday" },
  { name: "User", lastText: "Lets go somewhere", time: "Yesterday" },
  { name: "Srush", lastText: "Hey there", time: "Yesterday" },
  { name: "Mrunu", lastText: "Here we go", time: "Yesterday" },
];

function Example() {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#008069",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction
          onPress={() => {}}
          style={{
            width: 0,
          }}
        />
        <Appbar.Content
          title="WhatsApp"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20,
            // fontFamily: "Roboto",
            fontWeight: "700",
          }}
        />
        <Appbar.Action icon="magnify" iconColor="#fff" onPress={() => {}} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          iconColor="#fff"
        />
      </Appbar.Header>
      <TabsProvider
        defaultIndex={0}
        // onChangeIndex={handleChangeIndex} optional
      >
        <Tabs
          uppercase={false} 
          style={{ backgroundColor: "#008069" }} // works the same as AppBar in react-native-paper
          

          tabLabelStyle={{
            color: "#fff",
            fontSize: 14,
            // fontFamily: "Roboto",
            fontWeight: "700",
            borderBottomColor: "#fff",
          }}
        >
          <TabScreen icon="camera" label="">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="CHATS" badge={33}>
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="STATUS">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
          <TabScreen label="CALLS">
            <View style={{ backgroundColor: "red", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <ScrollView>
        {cardItems.map((item) => (
          <CardItem {...item} />
        ))}
      </ScrollView>
    </View>
  );
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

export default Example;