import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as Speech from "expo-speech";

const Recordscreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    interblack: require("../assets/fonts/Inter-Black.ttf"),
    interextra: require("../assets/fonts/Inter-ExtraBold.ttf"),
    interregular: require("../assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress1 = () => {
    navigation.navigate("Home");
  };

  const speak = () => {
    const thingToSay = "hello how are you";
    Speech.speak(thingToSay);
  };
  console.log(speak);

  return (
    <View>
      <View style={styles.view1}>
        <Button title="Press to hear some words" onPress={speak} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },

  input1: {
    height: 60,
    fontSize: 18,
    width: 380,
    paddingLeft: 10,
    paddingTop: 0,
    backgroundColor: "#F5F5F5",
    color: "black",
    borderWidth: 1,
    borderColor: "#9D9D9D",
    borderRadius: 10,
  },

  view1: {
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 0,
    borderColor: "gray",
    paddingRight: 5,
    paddingTop: 40,
    paddingBottom: 35,
  },
  logocontainer: {
    alignItems: "center",
    backgroundColor: "blue",
    height: 120,
    width: 430,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Imagecontainer: {
    marginTop: 40,
    marginRight: 35,
  },
  headertext: {
    fontSize: 45,
    color: "#2457C5",
    fontWeight: "bold",

    marginLeft: 10,
  },

  Image2container: {
    marginTop: 40,
    marginLeft: 15,
  },
  Imagecontainertext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  btntexticon1: {
    color: "white",
    textAlign: "center",

    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 0,
    fontWeight: "bold",
  },
  btntexticon: {
    color: "white",
    textAlign: "center",

    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 0,
    fontWeight: "bold",
  },
  btntext: {
    color: "white",
    textAlign: "center",

    fontSize: 20,

    paddingTop: 0,
    fontWeight: "bold",
  },
  touch1: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    marginTop: 30,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#3997EE",
  },
  guidetext: {
    justifyContent: "flex-end",
    marginTop: 20,
    marginLeft: 30,
    width: 350,
  },
  guidetextlist: {
    justifyContent: "flex-end",
    marginTop: 5,
    marginLeft: 30,
    width: 350,
  },
  guidetext1: {
    textAlign: "left",
    fontSize: 17,
    fontWeight: "400",
    color: "black",
    fontFamily: "interregular",
  },

  guidetext2: {
    fontSize: 15,
    fontWeight: "400",
    color: "#7E7E7E",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "interregular",
  },
  respbox: {
    width: 370,
    height: 350,
    marginLeft: 22,
    backgroundColor: "#3997EE",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 200,
  },
  respboxtext: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    color: "white",
    textAlign: "justify",
    fontFamily: "interregular",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Recordscreen;
