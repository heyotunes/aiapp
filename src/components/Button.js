import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Btn = () => {
  const navigation = useNavigation();

  const handlePress1 = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.logocontainer}>
      <TouchableOpacity onPress={handlePress1}>
        <Ionicons name="chevron-back" size={44} color="#2368CD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input1: {
    height: 60,
    fontSize: 20,
    width: 330,
    paddingLeft: 20,
    backgroundColor: "grey",
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  btn1: {
    fontSize: 35,
    height: 60,
    color: "white",
    marginRight: 5,
    backgroundColor: "white",
  },
  view1: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 0,
    borderColor: "gray",
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 5,
  },
  logocontainer: {},
});

export default Btn;
