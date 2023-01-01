import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as WebBrowser from "expo-web-browser";
import * as Random from "expo-random";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

import { auth } from "../firebase";
WebBrowser.maybeCompleteAuthSession();

const Loginscreens = () => {
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "42942344839-df78rf73c7p8k93jktqn4d50qqf5kd6h.apps.googleusercontent.com",
  });
  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      navigation.navigate("Main", { response });
    }
  }, [response]);
  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#1D76C9", "#2D52D3"]}
      style={styles.logocontainer}
    >
      <View style={styles.Imagecontainer}>
        <Image source={require("../assets/icon2.png")} />
      </View>
      <View style={styles.Textcontainer}>
        <Text style={styles.logotext}>SYNTELLIGENT</Text>
      </View>

      <View style={styles.Textcontainer}>
        <Text style={styles.introtext}>SYNTELLIGENT</Text>
      </View>
      <View style={styles.Btncontainer}>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.touch1}
        >
          <Text style={styles.btntext}>GOOGLE SIGN-IN</Text>
          <Entypo name="mail" size={30} color="white" style={styles.btnicon} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logocontainer: {
    alignItems: "center",

    flex: 1,
  },
  Imagecontainer: {
    marginTop: 100,
  },
  Textcontainer: {
    marginTop: 60,
  },
  logotext: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  Btncontainer: {
    marginTop: 450,
  },
  Btnbg: {
    borderRadius: 20,
    width: 360,
    height: 70,
    marginTop: 20,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.8,
    elevation: 40,
    shadowRadius: 100,
    shadowOffset: { width: 1, height: 13 },
    borderColor: "white",
  },
  btntext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,

    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: "bold",
  },
  touch1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 360,
    borderRadius: 20,
  },
  btnicon: {
    marginTop: 15,
    marginLeft: 12,
    paddingBottom: 20,
  },
});

export default Loginscreens;
