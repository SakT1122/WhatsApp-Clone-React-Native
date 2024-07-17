import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
 import CardItem from "./ChatItem";
import Example from "./ChatsPage";

const HomePage = () => {
  return (
    <ScrollView>
      <Example/>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});